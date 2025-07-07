import React from 'react';
import employee1 from '../../assets/images/aboutImages/employee1.png';
import employee2 from '../../assets/images/aboutImages/employee2.png';
import employee3 from '../../assets/images/aboutImages/employee3.png';
import { CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";

const Employee = () => {
    const employees = [
        {
            name: 'Tom Cruise',
            title: 'Founder & Chairman',
            img: employee1,
        },
        {
            name: 'Emma Watson',
            title: 'Managing Director',
            img: employee3,
        },
        {
            name: 'Will Smith',
            title: 'Product Designer',
            img: employee2,
        },
    ];

    return (
        <div className="max-w-[1170px] mx-auto mb-28 flex flex-wrap justify-center md:justify-between gap-6">
            {employees.map((employee, index) => (
                <div
                    key={index}
                    className="flex flex-col w-[370px] h-[564px] rounded-md px-3 pt-3"
                >
                    {/* Centered image */}
                    <div className="flex justify-center items-center h-[391px] bg-gray-100">
                        <img
                            src={employee.img}
                            alt={employee.name}
                            className="w-[250px] h-[391px] object-cover rounded-md px-4 py-4"
                        />
                    </div>

                    {/* Text + Social Icons */}
                    <div className="mt-3 text-left px-2">
                        <h1 className="text-2xl font-semibold py-2 text-gray-800">{employee.name}</h1>
                        <p className="text-sm text-gray-600">{employee.title}</p>

                        <div className="flex gap-3 mt-4 text-[28px]">
                            <CiTwitter className="text-gray-600 hover:text-blue-500 cursor-pointer transition duration-300" />
                            <CiInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer transition duration-300" />
                            <CiLinkedin className="text-gray-600 hover:text-blue-700 cursor-pointer transition duration-300" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Employee;
