// vueuse - collection of useful vue composables

export const useUtils = () => {
  const sayHello = () => console.log("hello from use utils");
  return {
    sayHello,
  }
}