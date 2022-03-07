import React from 'react'
import CardCurriculum from '../../component/bootcamp/CardCurriculum'

function Regular(props) {
    const reg = props.curriculum
    const resultR = (reg.curriculum || []).map(data => data)
    //console.log(resultR)
   
    const filterR = resultR.filter(data => data.curr_type === 'Regular')
    return(
            <div className="mt-12 min-w-[80vw] justify-center md:gap-4 md:min-w-full grid gap-8 md:grid-cols-3  " >
           
            { filterR.map(data =>
                    <CardCurriculum logo = {"/img/log2.png"}
                                    name = {data.curr_name}
                                    title = {data.curr_title}
                                    duration = {"Durasi : " + data.curr_duration}
                                    description = {"Pembelajaran : " + data.curr_description}
                                    link = {"Curriculum"}
                    />
                    
            )}
            </div>
    )
}
export default Regular