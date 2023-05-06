import React from 'react'
import "./dailyTask.css"
import DailyCard from './components/DailyCard'
import WeeklyCard from './components/WeeklyCard'
import DropdownTable from './components/DropdownTable'
import DailyTaskTable from './components/DailyTaskTable'
import WeeklyTaskTable from './components/WeeklyTaskTable'
import Rewards from './components/Rewards'
const DailyTask = () => {

    return (
        <div className='dailyTask'>
            <div className="dailyTaskCards">
                <DailyCard />
                <WeeklyCard />
            </div>
            <Rewards />
            <DropdownTable />
            <DailyTaskTable />
            <WeeklyTaskTable />
        </div>
    )
}

export default DailyTask