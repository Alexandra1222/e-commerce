export const saveLastInterestProduct = (productName) => {
    //API LocalStorage
    sessionStorage.setItem("lastProduct", productName)
}