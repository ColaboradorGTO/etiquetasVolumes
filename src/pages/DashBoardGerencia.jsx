import React, { Fragment, useEffect, useState, Suspense, lazy } from "react"


const ActionPesquisaEtiquetasVolumes = lazy(() => import("../componets/Gerencia/Components/ActionEtiquetasVolumes/actionPesquisaEtiquetasVolumes").then(module => ({ default: module.ActionPesquisaEtiquetasVolumes })));

export const DashBoardGerencia = () => {

  const [componentToShow, setComponentToShow] = useState("");


  let component = null;

  switch (componentToShow) {
    case "/gerencia/ActionPesquisaEtiquetasVolumes":
      component = <ActionPesquisaEtiquetasVolumes  />
      break;
    default:
      component = null;
      break;
  }

  return (

    <Fragment>
  
      <div className="page-wrapper">
        <div className="page-inner">
        
          <div className="page-content-wrapper">
      

            <main id="js-page-content" role="main" className="page-content">
              <div className="row">
                <div className="col-xl-12">
                  <div id="panel-1" className="panel">
                    <div className="panel-container show">
                      <div className="panel-content">
                        <Suspense fallback={<div>Loading...</div>}>
                          

                          <ActionPesquisaEtiquetasVolumes  />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <Fragment>
              <MenuButton />
              <FooterMain />
            </Fragment>
          </div>
        </div>
      </div>
    
    </Fragment>
  )
}
