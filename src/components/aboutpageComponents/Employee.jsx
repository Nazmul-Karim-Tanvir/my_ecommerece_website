import React from 'react';
import employee1 from '../../assets/images/aboutImages/employee1.png';
import employee2 from '../../assets/images/aboutImages/employee2.png';
import employee3 from '../../assets/images/aboutImages/employee3.png';
import { ImInstagram } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

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
                    className="flex flex-col w-[370px] h-[564px] bg-gray-100 rounded-md px-3 pt-3"
                >
                    <img
                        src={employee.img}
                        alt={employee.name}
                        className="w-full h-[391px] object-cover"
                    />
                    <div className="mt-3 text-left">
                        <h1 className="text-3xl font-semibold py-2">{employee.name}</h1>
                        <p className="text-sm text-gray-600">{employee.title}</p>
                        <div className="flex gap-3 mt-4">
                            <BsTwitter className="text-gray-600 hover:text-blue-500 cursor-pointer w-[28px] h-[24px]" />
                            <ImInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer w-[28px] h-[24px]" />
                            <LiaLinkedin className="text-gray-600 hover:text-blue-700 cursor-pointer w-[28px] h-[24px]" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Employee;
