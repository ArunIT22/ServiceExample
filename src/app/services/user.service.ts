export class UserService {
  users = ["Bathri", "Pavan", "Kayal"];

  getCurrentUser = () => {
    const current = Math.floor(Math.random() * this.users.length);
    return this.users[current];
  }
}
