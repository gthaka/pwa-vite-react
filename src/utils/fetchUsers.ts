import { User } from "../interfaces";

  // Utility function to fetch users
  const fetchUsers = async (): Promise<User[]> => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
  
      const data: User[] = await response.json();
      console.warn(data)
      localStorage.setItem("users", JSON.stringify(data))
      return data;
    } catch (error) {
      // let collection = localStorage.getItem('users')
      console.error(error);
      throw error;
      // return collection?JSON.parse(collection):[]
    }
  };
  

export default fetchUsers