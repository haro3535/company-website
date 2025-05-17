import React from "react";
import Link from "next/link";
import "@/app/globalsicons.css";
import SensorMeasuringPage from "../sensor-measuring/page";
import { url } from "inspector";



export default function DashNav() {
  return (
    <nav className="w-full flex py-3 px-4 border-b-1 border-gray-600">
        <h1 className="text-3xl font-bold">GRAID</h1>
        <ul className="flex items-center space-x-8 ml-10">
            <li>
                <a href="/graid/dashboard" className="">Dashboard</a>
            </li>
            <li>
                <Link href={'/graid/records'}>Records</Link>
            </li>
            <li>
                <Link href={'/graid/sensor-measuring'}>Sensor Measuring</Link>
            </li>
            <li>
                <a href="/graid/settings" className="">Settings</a>
            </li>
            <li>
                <Link href="/graid/help" className="">Help</Link>
            </li>
        </ul>
        <div className="ml-auto flex items-center space-x-4">
            <Link href="/graid/logout" className="text-red-500 hover:text-red-700">
                <p className="hidden text-red-600 md:block">Logout</p>
                <span className="material-symbols-outlined !block md:!hidden">
                    logout
                </span>
            </Link>
        </div>
    </nav>
  );
}