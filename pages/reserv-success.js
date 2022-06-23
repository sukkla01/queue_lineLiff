import React, { useEffect } from 'react'
import NavHeader from '../component/NavHeader'
import { useRouter } from 'next/router'

const ReservSuccess = (props) => {
    const router = useRouter()

    const browserTabcloseHandler = e => {
        e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = "";
      };

    const exit = () => {
        if (window) {
            router.beforePopState(() => {
              //if (componentShouldBeSavedAsDraft(componentData)) {
              const result = window.confirm("are you sure you want to leave?");
              if (!result) {
                window.history.pushState("/", "");
                router.push("/marketplace/upload-component");
              }
              console.log(goAway); // this value is always "" even though set differently in code. 
              return result;
            });
            window.onbeforeunload = browserTabcloseHandler;
          }
          //Router.events.on("routeChangeStart", handleRouteChange);
       
          return () => {
            if (window) {
              window.onbeforeunload = null;
            }
            router.beforePopState(() => {
              return true;
            });
          };
    }
    return (
        <div>
            <NavHeader />
            <div style={{ paddingTop: '20%' }}>
                <div style={{ backgroundColor: 'white', marginLeft: 15, marginRight: 10, height: 200, borderRadius: 15 }}>
                    <div className='text-center' style={{ marginTop: 0 }}>
                        <div style={{ fontSize: 17, paddingTop: 20, fontWeight: 'bold' }}>
                            จองเรียบร้อยแล้ว
                        </div>
                        <img src={'./images/shield.gif'} width={80} height={80} style={{ borderRadius: '50%', marginTop: 20 }} />
                    </div>
                    <button onClick={exit}>closecx</button>
                </div>
            </div>
        </div>
    )
}

export default ReservSuccess