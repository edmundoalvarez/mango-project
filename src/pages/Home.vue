<template>
    <section>
        <article>
            <div class="relative ">
                <picture>
                    <img src="../../public/imgs/bg-home.jpg" alt="Imagen ilustrativa de una pc con una frase esperanzadora">
                </picture>
                <div class="ml-[10%] translate-y-[-50%] top-[50%] absolute w-1/3 text-white">
                    <p class="text-2xl font-bold italic leading-tight">"De vez en cuando, una nueva tecnología, un antiguo problema y una gran idea se convierten en una innovación"</p>
                    <p>Dean Kamen.</p>
                </div>
            </div>

        </article>

        <article class=" py-10 bg-white">
            <h2 class="m-auto mb-10 w-[80%] text-[24px] font-bold ">Elegí el servicio por el que estás interesado</h2>
            <div class="bg-cover bg-[50%] flex justify-center content-center align-middle w-[80%] w-max-[1020px] m-auto gap-10">
                <div class="graphic-home hover:scale-105 transition-all flex flex-col justify-center content-center text-white h-[300px] w-1/2 bg-gray-600 border">
                    <h3 class="font-bold text-[24px] mx-auto">Diseño gráfico</h3>
                    <div class="text-white mt-[10px] w-full flex justify-center">
                        <router-link class="disabled:bg-yellow-700 text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" to="/servicios">Ver</router-link>
                    </div>
                </div>
                
                <div class="web-home hover:scale-105 transition-all flex flex-col justify-center content-center text-white h-[300px] w-1/2 bg-gray-600 border">
                    <h3 class="font-bold text-[24px] mx-auto">Diseño web</h3>
                    <div class="text-white font-bold mt-[10px] w-full flex justify-center">
                        <router-link class=" disabled:bg-yellow-700 text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" to="/servicios">Ver</router-link>
                    </div>
                </div>
                
            </div>
        </article>

        <article class=" pb-10 bg-white">
            <div class="flex w-[80%] m-auto">
                <div class="bg-white transition-all hover:bg-gray-900 hover:text-white flex flex-col justify-center content-center h-[200px] w-full w-max-[1020px] border-4 border-gray-900 text-black">
                    <p class="w-full flex justify-center mb-[10px] font-bold text-lg">Podés contactarnos por cualquier otra consulta que quieras hacer</p>
                    <div class="text-white w-full flex justify-center">
                        <router-link class="disabled:bg-yellow-700 mt-2 text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-10 py-3 text-center" to="/usuario/T7wfIE3Wbieqz3dcgq1En72noFZ2/chat">Contactanos</router-link>
                    </div>                
                </div>
            </div>
        </article>

    </section>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>
