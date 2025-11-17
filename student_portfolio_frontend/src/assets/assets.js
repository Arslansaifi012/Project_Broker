
import AI_Chatbots from '../assets/AI_Chatbots.jpeg'
import AnalyticsDashboards from '../assets/AnalyticsDashboards.jpeg'
import Blockchain from '../assets/Blockchain.jpeg'
import Ecommerce from '../assets/Ecommerce.jpeg'
import Mobile_Gaming from '../assets/Mobile_Gaming.jpeg'
import TradingBot from '../assets/TradingBot.jpeg'
import Banner from '../assets/Banner.jpeg'


export const assets = {
    AI_Chatbots,
    AnalyticsDashboards,
    Blockchain,
    Ecommerce,
    Mobile_Gaming,
    TradingBot,
    Banner
}

export const products = [
    {
        _id:"aaa",
        name:"chatBot Ai",
        description:"An AI chatbot is a software application that uses artificial intelligence (AI) to simulate human conversation through text or voice interactions.",
        price:50,
        files:["attendance_system.zip", "demo_video.mp4"],
        
        category:"Artificial Intelligence",
        subCategory:"Computer Vision",
        techStack:["python", "OpenCV", "TensorFlow"],
        thumbnails:[AI_Chatbots],
        date:1716634345448,
        isFeatured:true,
        sellerId:"student123",
        rating:4.8,
    },

    {
    _id: "proj001",
    title: "AI Based Attendance System",
    description: "A face-recognition based attendance system built using machine learning and OpenCV. It marks attendance automatically and stores data in a cloud database.",
    price: 1500,
    files: ["attendance_system.zip", "demo_video.mp4"],
    
    category: "Artificial Intelligence",
    subCategory: "Computer Vision",
    techStack: ["Python", "OpenCV", "TensorFlow"],
    thumbnails: [AnalyticsDashboards],
    date: 1716634345448,
    isFeatured: true,
    sellerId: "student123",
    rating: 4.8
},
{
    _id: "proj002",
    title: "E-commerce Full-Stack Website",
    description: "A MERN stack based ecommerce platform with cart, payment gateway, admin controls, and product management features.",
    price: 2200,
    files: ["ecommerce_source_code.zip", "setup_guide.pdf"],
    
    category: "Web Development",
    subCategory: "Full Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    thumbnails: [Blockchain],
    date: 1716634345450,
    isFeatured: false,
    sellerId: "student245",
    rating: 4.6
},
{
    _id: "proj003",
    title: "College Management System",
    description: "A robust system for managing students, attendance, results, staff, and fees with role-based access.",
    price: 1800,
    files: ["college_mgmt.zip", "database_schema.sql"],
    
    category: "SaaS",
    subCategory: "Management Tool",
    techStack: ["PHP", "MySQL", "Bootstrap"],
    thumbnails: [Ecommerce],
    date: 1716634345455,
    isFeatured: true,
    sellerId: "student999",
    rating: 4.9
},
{
    _id: "proj004",
    title: "IoT Smart Home Automation",
    description: "An IoT system that controls lights, fan, and appliances through sensors and a mobile application.",
    price: 2500,
    files: ["iot_project.zip", "circuit_diagram.png"],
    category: "IoT",
    subCategory: "Home Automation",
    techStack: ["Arduino", "ESP8266", "C++"],
    thumbnails: [Mobile_Gaming],
    date: 1716634345460,
    isFeatured: false,
    sellerId: "student556",
    rating: 4.7
},
{
    _id: "proj005",
    title: "Crypto Wallet Mobile App",
    description: "A secure mobile application to send, receive, and store cryptocurrency with wallet backup and 2FA.",
    price: 3000,
    files: ["crypto_app.rar", "api_docs.pdf"],
    
    category: "Blockchain",
    subCategory: "Web3 Applications",
    techStack: ["Flutter", "Firebase", "Solana API"],
    thumbnails: [TradingBot],
    date: 1716634345463,
    isFeatured: true,
    sellerId: "student112",
    rating: 4.5
},
{
    _id: "proj006",
    title: "Online Learning & Quiz Platform",
    description: "A complete online learning platform with quizzes, progress tracking, course videos, and admin panel.",
    price: 2600,
    files: ["lms_project.zip", "readme.pdf"],
    
    category: "EdTech",
    subCategory: "Learning Platform",
    techStack: ["Django", "SQLite", "HTML/CSS"],
    thumbnails: [Banner],
    date: 1716634345467,
    isFeatured: false,
    sellerId: "student501",
    rating: 4.4
}

]