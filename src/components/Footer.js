import React from 'react'
import Icon from './Icon'

const Footer = () => {
  return (
    <div class="flex items-end w-full min-h-screen bg-white">

    <footer class="w-full text-gray-700 bg-neutral-800 body-font">
        <div
            class="container flex flex-col flex-wrap px-5 py-14 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                    <img src="./img/sg1.png"/>
                </a>
                
                
                    <div class="flex items-center justify-center sm:ml-auto mt-4">
                        <Icon instagram disableHover className={'text-gray-200 text-2xl mx-2'}/>
                        <Icon facebook disableHover className={'text-gray-200 text-2xl mx-2'}/>
                        <Icon whatsapp disableHover className={'text-gray-200 text-2xl mx-2'}/>
                    </div>
                
            </div>
            <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    
                    <nav class="mb-10 list-none">
                        <li class="mt-3">
                            <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-100 uppercase title-font">Horarios Atención</h2>
                            <p class="text-gray-300 cursor-pointer">Lunes a Viernes.</p>
                            <p class="text-gray-300 cursor-pointer">08:30 - 13:00, 15:30 - 20:00</p>
                            <p class="text-gray-300 cursor-pointer">Sábado.</p>
                            <p class="text-gray-300 cursor-pointer">08:30 - 13:00, 16:00 - 20:00</p>
                        </li>
                    </nav>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <nav class="mb-10 list-none">
                    <li class="mt-3">
                        <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-100 uppercase title-font">Encontranos en</h2>
                        <p class="text-gray-300 cursor-pointer">Alvear 399 (Esquina Tucumán), Villa María. Córdoba</p>
                        <a href='https://maps.app.goo.gl/obL1ZULvzmtMUs1V6' className='pt-2'>
                        <p class="text-blue-200 underline cursor-pointer"><Icon map className={'mr-2 text-red-500'}/>Cómo llegar</p>
                        </a>
                    </li>
                    
                    </nav>
                </div>
                <div class="w-full pl-14 lg:w-1/4 md:w-1/2">
                    <nav class="mb-10 list-none">
                    <li class="mt-3">
                        <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-100 uppercase title-font">Teléfonos de contacto</h2>
                        <li className='mb-2'>
                            <p class="text-gray-100 cursor-pointer flex uppercase text-sm title-font">Ventas</p>
                            <p class="text-gray-300 cursor-pointer flex pl-3 pt-1"><Icon whatsapp className={'text-xl pr-1 pt-0.5'}/> +54 353 4175020</p>
                        </li>
                        <li>
                            <p class="text-gray-100 cursor-pointer flex uppercase text-sm title-font">Servicio Técnico</p>
                            <p class="text-gray-300 cursor-pointer flex pl-3 pt-1"><Icon whatsapp className={'text-xl pr-1 pt-0.5'}/>+54 353 5697407</p>
                            </li>
                        </li></nav>
                    </div>

                <div class="w-full pl-14 lg:w-1/4 md:w-1/2">
                    
                    <nav class="mb-10 list-none">
                        <li class="mt-3 ">
                        <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-100 uppercase title-font">Atención Al Cliente</h2>
                            <li className='hover:animate-pulse'>
                            <a class="text-gray-300 cursor-pointer hover:text-gray-200 flex">
                            <div className='items-center pl-2 justify-center bg-gray-200 flex rounded-full w-7 h-7 mr-2'>
                                <Icon phone disableHover className={'text-neutral-900 pr-2'}/>
                            </div>
                            Llamanos</a>
                            </li>
                        </li>
                        <li class="mt-3 hover:animate-pulse">
                        <a class="text-gray-300 cursor-pointer hover:text-gray-200 flex">
                        <div className='items-center pl-2 justify-center bg-gray-200 flex rounded-full w-7 h-7 mr-2'><Icon whatsapp disableHover className={'text-neutral-900 pr-2'}/></div>
                            Whatsapp</a>
                        </li>
                        <li class="mt-3 hover:animate-pulse">
                        <a class="text-gray-300 cursor-pointer hover:text-gray-200 flex">
                        <div className='items-center pl-2 justify-center bg-gray-200 flex rounded-full w-7 h-7 mr-2'><Icon  mail disableHover className={'text-neutral-900 pr-2'}/></div>
                            Correo</a>
                        </li>

                        
                        
                    </nav>
                </div>
            </div>
        </div>

    </footer>

</div>
  )
}

export default Footer
