import React, { useState, useEffect } from 'react'

function Watch() {

    const date = new Date();

    const [time, setTime] =
        useState({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
        });

    useEffect(() => {

        const timer = setInterval(() => {

            const date = new Date();
            setTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            });

        }, 1000);

        return () => clearInterval(timer);

    }, []);




    return (

        <>
            <div style={{marginTop: '10%'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>Simple Watch </h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                        <h3 style={{color: 'yellow'}}>
                            {time.hours < 10 ? ` 0${time.hours}` : time.hours} hours : <span /> 
                            {time.minutes < 10 ? ` 0${time.minutes}` : time.minutes} minutes :  <span />
                            {time.seconds < 10 ? ` 0${time.seconds}` : time.seconds} seconds
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watch