// src/utils/getTimeLeft.js

export default function getTimeLeft(targetDate) {
    const target = targetDate.getTime();
    const now = new Date().getTime();
    const difference = target - now;

    return {
        total: difference,
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
}
