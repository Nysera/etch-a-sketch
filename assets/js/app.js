
const responsiveWrapper = function() {
    const gridWrapper = document.querySelector(".grid-wrapper");
    const gridWrapperHeight = gridWrapper.clientWidth;

    gridWrapper.style.height = `${gridWrapperHeight}px`;
    
    window.addEventListener("resize", function() {
        const gridWrapperHeight = gridWrapper.clientWidth;
        gridWrapper.style.height = `${gridWrapperHeight}px`;

        const gridItems = document.querySelectorAll(".grid-wrapper .grid-item");
        const gridItemWidth = gridWrapper.clientWidth;
        const gridItemHeight = gridWrapper.clientHeight;
        const gridSize = calculateGridSize();

        gridItems.forEach(function(item) {
            item.style.width = `${gridItemWidth / gridSize}px`;
            item.style.height = `${gridItemHeight / gridSize}px`;
        });

    });
};
responsiveWrapper();

const buttons = document.querySelectorAll(".intro-wrapper .btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (button.id === "changeGridSizeBtn") {
            customGrid = window.prompt("Pick an even number between 16 and 100");
            document.querySelector(".grid-wrapper").innerHTML = "";
            createGrid();
        } else if (button.id === "resetGridBtn") {
            customGrid = false;
            document.querySelector(".grid-wrapper").innerHTML = "";
            createGrid();
        }

    });
});

const defaultGrid = 16;
let customGrid;

const calculateGridSize = function() {
    if (customGrid) {
        if (customGrid >= 16 && customGrid <= 100 && customGrid % 2 === 0) {
            return customGrid;
        } else {
            alert(`Grid size has been reverted to the default size of ${defaultGrid} as an invalid value was given. Please try again.`);
            return defaultGrid;
        }
    } else {
        return defaultGrid;
    }
};

const createGridItem = function(gridWrapper, width, height, gridSize) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${width / gridSize}px`;
    gridItem.style.height = `${height / gridSize}px`;
    gridWrapper.append(gridItem);
};

const createGrid = function() {
    const gridWrapper = document.querySelector(".grid-wrapper");
    const width = gridWrapper.clientWidth;
    const height = gridWrapper.clientHeight;
    const gridSize = calculateGridSize();

    for (let i = 0; i < gridSize; i++) {
        createGridItem(gridWrapper, width, height, gridSize);

        for (let j = 1; j < gridSize; j++) {
            createGridItem(gridWrapper, width, height, gridSize);
        }

    }

    const gridItems = document.querySelectorAll(".grid-wrapper .grid-item");
    gridItems.forEach(function(item) {
        item.addEventListener("mousedown", function() {
            this.style.backgroundColor = "#363b40";
        });
    });
};

createGrid();