import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';


function CounterUp() {

    const [counterOn, setcounterOn] = useState(false);

    return (

        <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
            <div>
                <p style={{ fontSize: '14px' }}><b>{counterOn && <CountUp start={0} end={8} duration={2} delay={0} />}</b> SEASONS | <b>{counterOn && <CountUp start={0} end={73} duration={2} delay={0} />}</b> EPISODES | TV-MA</p>

                

            </div>
        </ScrollTrigger>

    )
}

export default CounterUp