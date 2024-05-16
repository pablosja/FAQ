function showSection(section) {
    var mainContent = document.getElementById("mainContent");
    var content = "";

    switch(section) {
        case 1:
            content = `
            <h2>Desarrollo web Front-end</h2>
            <p>El desarrollo web front-end se refiere a la práctica de construir y diseñar la interfaz de usuario de un sitio web o aplicación. Esto implica trabajar con tecnologías del lado del cliente, como HTML, CSS y JavaScript, para crear páginas web interactivas y visualmente atractivas.</p>
            <p>La expresión "front-end" tiene su origen en el principio de separación de preocupaciones, el cual aboga por establecer una clara distinción entre la interfaz de usuario (front-end) y la lógica del servidor (back-end) en una aplicación. Esta separación facilita la creación de un código más modular y fácil de mantener.</p>
            <p>Características:</p>
            <ol>
                <li>Interactividad del Usuario: Desarrollar interfaces de usuario interactivas y atractivas que mejoren la experiencia del usuario en el navegador.</li>
                <li>Compatibilidad con Navegadores: Asegurar que la aplicación sea compatible con diversos navegadores para garantizar una experiencia consistente para todos los usuarios.</li>
                <li>Diseño Responsivo: Implementar diseños que se adapten y funcionen de manera óptima en diferentes dispositivos y tamaños de pantalla.</li>
                <li>Optimización de Rendimiento: Optimizar el rendimiento de la interfaz para cargar rápidamente y proporcionar una experiencia fluida.</li>
                <li>Desarrollo Basado en Componentes: Adoptar enfoques basados en componentes para facilitar la reutilización de código y mejorar la mantenibilidad.</li>
                <li>Accesibilidad: Garantizar que la aplicación sea accesible para personas con discapacidades mediante el cumplimiento de estándares de accesibilidad.</li>
                <li>Integración de Diseño y Desarrollo: Colaborar estrechamente con diseñadores para implementar interfaces que reflejen la visión y la identidad visual del producto.</li>
                <li>Frameworks y Bibliotecas: Utilizar frameworks y bibliotecas como React, Angular o Vue.js para agilizar el desarrollo y facilitar la gestión del estado de la aplicación.</li>
            </ol>
            <p>Herramientas usadas en el desarrollo front-end:</p>
            <ul>
                <li>Hyper Text Markup Language (HTML)</li>
                <li>Cascading Style Sheets (CSS)</li>
                <li>JavaScript</li>
                <li>WebAssembly</li>
            </ul>
            <p>Objetivos del desarrollo:</p>
            <ul>
                <li>Accesibilidad</li>
                <li>Rendimiento</li>
            </ul>
        `;
            break;
        case 2:
            content = "Amarillo";
            break;
        case 3:
            content = "Verde";
            break;
        case 4:
            content = "Azul";
            break;
        default:
            content = "Blanco";
    }

    mainContent.innerHTML = content;
}

function backToMainContent() {
    var mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = "<p id=\"content\">blanco</p>";
}