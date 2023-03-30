export class UserService {
  users = ["Bathri", "Pavan", "Kayal"];

  getCurrentUser = () => {
    const current = Math.floor(Math.random() * this.users.length) + 1;
    return this.users[current];
  }
}
