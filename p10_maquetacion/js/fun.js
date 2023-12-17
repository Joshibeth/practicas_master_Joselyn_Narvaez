
    const circle = document.getElementById('circle');
    const container = document.getElementById('container');

    circle.addEventListener('click', () => {

        const randomColor = getRandomColor();
        circle.style.backgroundColor = randomColor;

        const elementsToHide = container.querySelectorAll('.other-element');

        elementsToHide.forEach(element => {
            element.style.display = 'none';
        
        });

    });
        

    function getRandomColor() {

        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        
        return color;
    
    }



