import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { getAllData, getData } from '../api/data'

import TimeRangeButtons from './TimeRangeButtons';

export default function Grafico(props) {

    const [dataph, setDataph] = useState([])
    const [dataorp, setDataorp] = useState([])
    const [dataoxigenio, setDataoxigenio] = useState([])
    const [datatemperatura, setDatatemperatura] = useState([])
    const [datasalinidade, setDatasalinidade] = useState([])
    const [datacondutividade, setDatacondutividade] = useState([])
    const [datatotalsolidos, setDatatotalsolidos] = useState([])
    const [datagravidade, setDatagravidade] = useState([])
    const [dataturbidez_l, setDataturbidez_l] = useState([])
    const [dataturbidez_h, setDataturbidez_h] = useState([])
    const [dataenergia_ishunt, setDataenergia_ishunt] = useState([])
    const [dataenergia_vshunt, setDataenergia_vshunt] = useState([])
    const [dataenergia_vbus, setDataenergia_vbus] = useState([])
    const [dataenergia_watts, setDataenergia_watts] = useState([])
    const [timeRenge, setTimeRenge] = useState('1H')

    const [timer, settimer] = useState([false])

    function getTimepass(periodo) {

        let time = (new Date)

        switch (periodo) {
            case '1H':
                time.setHours(time.getHours() - 1);
                break;

            case '10H':
                time.setHours(time.getHours() - 10);
                break;

            case '1D':
                time.setDate(time.getDate() - 1); // Use setDate para subtrair um dia
                break;

            case '1S':
                time.setDate(time.getDate() - 7); // Subtrair uma semana, 7 dias
                break;

            case '1M':
                time.setMonth(time.getMonth() - 1);
                break;

            case '1A':
                time.setFullYear(time.getFullYear() - 1);
                break;

            default:
                time = null;
                break;
        }

        return time
    }

    setInterval(() => {
        settimer((old) => {
            return !old
        })
    }, 30000) //30000


    useEffect(() => {

        if(timeRenge === 'Total'){
            getAllData('ph').then(response => {
                setDataph(prepareData(response))
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('orp').then(response => {
                setDataorp(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('oxigenio').then(response => {
                console.log(response);
                setDataoxigenio(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('temperatura').then(response => {
                setDatatemperatura(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('salinidade').then(response => {
                setDatasalinidade(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('condutividade').then(response => {
                setDatacondutividade(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('total_solidos_dissolvidos').then(response => {
                setDatatotalsolidos(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('gravidade').then(response => {
                setDatagravidade(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('turbidez_l').then(response => {
                setDataturbidez_l(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('turbidez_h').then(response => {
                setDataturbidez_h(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('energia_ishunt').then(response => {
                setDataenergia_ishunt(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('energia_vshunt').then(response => {
                setDataenergia_vshunt(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('energia_vbus').then(response => {
                setDataenergia_vbus(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getAllData('energia_watts').then(response => {
                setDataenergia_watts(prepareData(response))
            }).catch(error => {
                console.log(error);
            })


        }else{
            let timerPass = String(getTimepass(timeRenge))
            getData('ph',timerPass).then(response => {
                setDataph(prepareData(response))
                console.log(response);
            }).catch(error => {
                console.log(error);
            })
    
            getData('orp',timerPass).then(response => {
                setDataorp(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('oxigenio',timerPass).then(response => {
                console.log(response);
                setDataoxigenio(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('temperatura',timerPass).then(response => {
                setDatatemperatura(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('salinidade',timerPass).then(response => {
                setDatasalinidade(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('condutividade',timerPass).then(response => {
                setDatacondutividade(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('total_solidos_dissolvidos',timerPass).then(response => {
                setDatatotalsolidos(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('gravidade',timerPass).then(response => {
                setDatagravidade(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('turbidez_l',timerPass).then(response => {
                setDataturbidez_l(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('turbidez_h',timerPass).then(response => {
                setDataturbidez_h(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('energia_ishunt',timerPass).then(response => {
                setDataenergia_ishunt(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('energia_vshunt',timerPass).then(response => {
                setDataenergia_vshunt(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('energia_vbus',timerPass).then(response => {
                setDataenergia_vbus(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
    
            getData('energia_watts',timerPass).then(response => {
                setDataenergia_watts(prepareData(response))
            }).catch(error => {
                console.log(error);
            })
        }

        
    }, [timer])


    function prepareData(datas) {
        const objetc = datas.map((data) => {
            return {
                x: new Date(data.date),
                y: data.value
            };
        }).sort((a, b) => {
            return a.x - b.x;
        });

        return [{ data: objetc }]
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

            this.noData = {
                text: 'Loading...'
            };

            this.yaxis = {
                labels: {
                    style: {
                        colors: '#FFFFFF' // Cor do texto do eixo Y (branco)
                    }
                }
            };

            this.tooltip = {
                theme: 'dark' // Definindo o tema do tooltip para escuro
            };

        }
    }

    return (
        <div>
            <div className='centerPosition'>
                <TimeRangeButtons setTimeRenge={setTimeRenge} settimer={settimer}/>
            </div>

            <div>
                <div className='same_line'>
                    <div className='chart-wrapper'>
                        <h3>PH (0.1 ~ 14)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#77CCEE')} series={dataph} type="area" height={400} />
                        </div>
                    </div>

                    <div className='chart-wrapper'>
                        <h3>ORP (mV)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#FECC00')} series={dataorp} type="area" height={400} />
                        </div>
                    </div>
                </div>

                <div className='same_line'>
                    <div className='chart-wrapper'>
                        <h3>Dissolved Oxygen(D.O) (mg/L)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#FECC00')} series={dataoxigenio} type="area" height={400} />
                        </div>
                    </div>

                    <div className='chart-wrapper'>
                        <h3>Temperature (ºC)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#77CCEE')} series={datatemperatura} type="area" height={400} />
                        </div>
                    </div>
                </div>

                <div className='same_line'>
                    <div className='chart-wrapper'>
                        <h3>Salinity (PSU/PPT)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#000000')} series={datasalinidade} type="area" height={400} />
                        </div>
                    </div>

                    <div className='chart-wrapper'>
                        <h3>Conductivity (µS/cm)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#000000')} series={datacondutividade} type="area" height={400} />
                        </div>
                    </div>
                </div>

                <div className='same_line'>
                    <div className='chart-wrapper'>
                        <h3>Total Dissolved Solids (ppm)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#000000')} series={datatotalsolidos} type="area" height={400} />
                        </div>
                    </div>

                    <div className='chart-wrapper'>
                        <h3>Specific Gravity (1 ~ 1.300)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#000000')} series={datagravidade} type="area" height={400} />
                        </div>
                    </div>
                </div>

                <div className='same_line'>
                    <div className='chart-wrapper'>
                        <h3>Turbidity (Low Range)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#95C11F')} series={dataturbidez_l} type="area" height={400} />
                        </div>
                    </div>

                    <div className='chart-wrapper'>
                        <h3>Turbidity (High Range)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#BA3525')} series={dataturbidez_h} type="area" height={400} />
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className='same_line'>
                    <div className='chart-wrapper'>
                        <h3>Battery : Shunt Current (A)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#207FC2')} series={dataenergia_ishunt} type="area" height={400} />
                        </div>
                    </div>

                    <div className='chart-wrapper'>
                        <h3>Battery : Shunt Voltage (V)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#77CCEE')} series={dataenergia_vshunt} type="area" height={400} />
                        </div>
                    </div>
                </div>

                <div className='same_line'>
                    <div className='chart-wrapper'>
                        <h3>Battery : Bus Voltage (V)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#77CCEE')} series={dataenergia_vbus} type="area" height={400} />
                        </div>
                    </div>

                    <div className='chart-wrapper'>
                        <h3>Battery : Power (W)</h3>
                        <div className='chart-small'>
                            <ReactApexChart options={new Options('#77CCEE')} series={dataenergia_watts} type="area" height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}