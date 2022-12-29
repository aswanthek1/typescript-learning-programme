///generics will help us to reuse a component and it creat type variable which can be used to create classes, function and type aliases that dont need to explicitly define their type

function identify<T>(val: T): T {
  return val;
}

identify("54"); //here the function will return the same type of the argument passed

///in case of arrays generics can be introduced like this

const getProduct = <T>(products: T[]): T => {
  return products[4];
};
