import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import {getData} from '../api/data'

export default function Grafico(props) {

    const [dataph,setDataph] = useState([])
    const [dataorp,setDataorp] = useState([])
    const [dataoxigenio,setDataoxigenio] = useState([])
    const [datatemperatura,setDatatemperatura] = useState([])
    const [datacondutividade,setDatacondutividade] = useState([])
    const [dataturbidez_l,setDataturbidez_l] = useState([])
    const [dataturbidez_h,setDataturbidez_h] = useState([])
    const [dataenergia_c,setDataenergia_c] = useState([])
    const [dataenergia_t_s,setDataenergia_t_s] = useState([])
    const [dataenergia_t_b,setDataenergia_t_b] = useState([])
    const [datapotencia,setDatapotencia] = useState([])
    

    useEffect(()=>{
        getData('ph').then(response=>{
            setDataph(prepareData(response))
            console.log(response);
        }).catch(error=>{
            console.log(error);
        })

        getData('orp').then(response=>{
            setDataorp(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })

        getData('oxigenio').then(response=>{
            console.log(response);
            setDataoxigenio(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })

        getData('temperatura').then(response=>{
            setDatatemperatura(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })

        getData('condutividade').then(response=>{
            setDatacondutividade(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })

        getData('turbidez_l').then(response=>{
            setDataturbidez_l(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })

        getData('turbidez_h').then(response=>{
            setDataturbidez_h(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })

        getData('energia_c').then(response=>{
            setDataenergia_c(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })

        getData('energia_t_s').then(response=>{
            setDataenergia_t_s(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })

        getData('energia_t_b').then(response=>{
            setDataenergia_t_b(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })

        getData('potencia').then(response=>{
            setDatapotencia(prepareData(response))
        }).catch(error=>{
            console.log(error);
        })
    },[])


    function prepareData(datas){
        const objetc = datas.map((data)=>{
            return {
                x: new Date(data.date),
                y: data.value
            };
        }).sort((a, b) => {
            return a.x - b.x;
        });

        return [{data:objetc}]
    }
    

    class Options {
        constructor(color) {
            this.chart = {
                id: 'fb',
                group: 'social',
                type: 'line',
                height: 160
            };
            this.colors = [color];

            this.noData= {
                text: 'Loading...'
            };
        }
    }

    return (
        <div>
            <div>
                <div id="wrapper">
                    <h3>PH</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#77CCEE')} series={dataph} type="area" height={400} />
                        </div>
                </div>
                <div id="wrapper">
                <h3>ORP</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#FECC00')} series={dataorp} type="area" height={400} />
                        </div>
                </div>
                {/* <div id="wrapper">
                <h3>Oxigênio Dissolvido (O.D)</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#FECC00')} series={dataoxigenio} type="area" height={400} />
                        </div>
                </div>
                <div id="wrapper">
                <h3>Temepratura</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#77CCEE')} series={datatemperatura} type="area" height={400} />
                        </div>
                </div>
                <div id="wrapper">
                <h3>Condutividade</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#000000')} series={datacondutividade} type="area" height={400} />
                        </div>
                </div>
                <div id="wrapper">
                <h3>Turbidez Baixa</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#95C11F')} series={dataturbidez_l} type="area" height={400} />
                        </div>
                </div>
                <div id="wrapper">
                <h3>Turbidez Alta</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#BA3525')} series={dataturbidez_h} type="area" height={400} />
                        </div>
                </div>
                <div id="wrapper">
                <h3>Energia (A)</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#207FC2')} series={dataenergia_c} type="area" height={400} />
                        </div>
                </div>
                <div id="wrapper">
                <h3>Energia (V)</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#77CCEE')} series={dataenergia_t_s} type="area" height={400} />
                        </div>
                </div>
                <div id="wrapper">
                <h3>Energia (AB)</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#77CCEE')} series={dataenergia_t_b} type="area" height={400} />
                        </div>
                </div>
                <div id="wrapper">
                <h3>Energia (P)</h3>
                        <div id="chart-small">
                            <ReactApexChart options={new Options('#77CCEE')} series={datapotencia} type="area" height={400} />
                        </div>
                </div> */}
            </div>
        </div>
    )
}