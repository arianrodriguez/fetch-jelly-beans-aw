class BeanEntity {
    constructor(name = "", ingredients = [], glutenFree = false, sugarFree = false, seasonal = false, kosher = false, image = "") {
        this.name = name;
        this.ingredients = ingredients;
        this.glutenFree = glutenFree;
        this.sugarFree = sugarFree;
        this.seasonal = seasonal;
        this.kosher = kosher;
        this.image = image;
    }
}

export default BeanEntity;