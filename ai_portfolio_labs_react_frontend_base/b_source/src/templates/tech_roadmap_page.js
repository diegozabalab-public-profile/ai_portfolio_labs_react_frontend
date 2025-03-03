import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaCloud } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiTailwindcss } from "react-icons/si";

const milestones = [
    {
        day: "Day 1",
        events: [
            { title: "Static Portfolio", description: "Started with HTML, CSS, and JavaScript.", icon: <FaReact className="text-blue-400 text-4xl" /> }
        ]
    },
    {
        day: "Day 3",
        events: [
            { title: "Dynamic Frontend", description: "Moved to React for better UI/UX.", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> }
        ]
    },
    {
        day: "Day 7",
        events: [
            { title: "Backend API", description: "Created a Django REST API.", icon: <SiDjango className="text-green-600 text-4xl" /> },
            { title: "Database Integration", description: "Added PostgreSQL for data storage.", icon: <SiPostgresql className="text-blue-500 text-4xl" /> },
            { title: "Cloud Deployment", description: "Deployed using CI/CD and cloud hosting.", icon: <FaCloud className="text-gray-500 text-4xl" /> }
        ]
    }
];

const TechRoadmapPage = () => {
    const [selected, setSelected] = useState(null);

    return (
        <motion.div
            className="flex flex-col items-center p-10 bg-gradient-to-b from-blue-50 to-blue-200 min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-3xl font-bold mb-6"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                My Website Growth Roadmap
            </motion.h1>

            {/* Wrapper for the timeline */}
            <div className="relative flex flex-col items-center w-full max-w-3xl">
                {/* Vertical Line */}
                <div className="absolute left-5 top-0 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

                {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex flex-col w-full mb-6">
                        {/* Day Header */}
                        <h2 className="text-lg font-semibold mb-2 text-gray-700">{milestone.day}</h2>

                        {milestone.events.map((event, eventIndex) => (
                            <motion.div
                                key={eventIndex}
                                className="relative flex items-center space-x-4 p-4 mb-3 rounded-xl shadow-md bg-white w-full cursor-pointer hover:shadow-lg"
                                onClick={() => setSelected(eventIndex === selected ? null : eventIndex)}
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                {/* Connector Circle */}
                                <div className="absolute left-5 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2"></div>

                                {/* Icon and Title in Same Row */}
                                <div className="flex items-center space-x-3">
                                    <motion.div
                                        className="relative z-10"
                                        initial={{ rotate: -10 }}
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 0.5 }}>
                                        {event.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-semibold">{event.title}</h3>
                                </div>

                                {/* Text Content */}
                                {selected === eventIndex && (
                                    <motion.p
                                        className="text-gray-600 mt-2"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {event.description}
                                    </motion.p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default TechRoadmapPage;