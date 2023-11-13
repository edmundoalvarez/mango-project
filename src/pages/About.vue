<template>
    <div class="w-[85%] w-max-[1080px] m-auto py-[60px]">
        <div class=" w-full flex flex-col">
            <picture>
                <img src="../../public/imgs/bg-about.svg" alt="Imagen ilustrativa que da la bienvenida a los visitantes de la web.">
            </picture>
        </div>

        <section class="mt-8 mb-8 relative">
            <h2 class="text-3xl font-bold mb-6">Quiénes somos</h2>
            <div class="flex flex-col gap-5">
                <p>Fundada en 2023, <b>Mango</b> nació de la visión de un grupo de apasionados diseñadores que soñaban con construir un espacio donde el diseño fuera la fuerza motriz de la expresión y la comunicación. A lo largo de los años, hemos crecido y evolucionado, pero nuestra dedicación a la calidad y la creatividad ha permanecido constante.</p>
                <p>En <b>Mango</b>, amamos lo que hacemos. Nos apasiona el diseño en todas sus formas, y estamos comprometidos en ofrecer soluciones únicas y efectivas para cada cliente. Creemos que un diseño excepcional puede transformar una idea en una poderosa herramienta de comunicación, capaz de impulsar negocios y conectar con audiencias de manera impactante.</p>
            </div>
            <div class="text-white mt-[50px] w-full flex justify-center">
                <router-link class="disabled:bg-yellow-700 mt-2 text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center" to="/servicios">Ver nuestros servicios</router-link>
            </div>
        </section>
        
    </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
    export default {
    
        name: 'About',
        components: {BaseButton}
    }
</script>
