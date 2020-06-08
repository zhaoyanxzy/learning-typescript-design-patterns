export class Singleton {
	private static instanceCounter = 0;
	private static instance: Singleton = null;
	public static get getInstance() {
		if (Singleton.instance === null) {
			Singleton.instance = new Singleton()
			return Singleton.instance;
		}
		return Singleton.instance;
	}

	private constructor() {
		// instanceCounter increments for every instantiation
		Singleton.instanceCounter = Singleton.instanceCounter + 1;
		console.log("instanceCounter is", Singleton.instanceCounter);
	}

	public printDetails(message: string): void {
		console.log(message);
	}
}
