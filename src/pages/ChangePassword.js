import React, { useEffect, useState } from "react";

import Layout from "../Components/Basic/Layout";
import PageBorderTitle from "../Components/Common/PageBorderTitle";
import ChangePass from "../Components/UserProfile/ChangePass";
import { getUserName } from "../Components/Util/helper";

import loading from './../img/loading.gif';
import profile from './../img/profileIcon.png';

const ChangePassword = function(){

    const [loaded , setLoaded] = useState(false)

    useEffect(()=> {setLoaded(true)}, [loaded])

    if(loaded){
        return(
            <Layout containerClassName={'App'} menuActive={-1}>
                <PageBorderTitle title={getUserName() +  "'s Profile"} icon={profile}>
                    <ChangePass />
                </PageBorderTitle>
            </Layout>
        )
    }
    else return(<div className="loading"> <img src={loading} /> </div>)
   
}

export default ChangePassword;