export class LogService {

  LogMessage(name: string, status: string, addedDate: Date) {
    console.log(`New Product Added\n Product Name :${name}, created on ${addedDate} and it is ${status}`);
  }

}
