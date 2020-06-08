export class NotASingleton {
	private static instanceCounter = 0;

	public constructor() {
		// Before the implementation of the Singleton design pattern,
		// everytime the printDetails is invovked, a new object is created.
		// However, the printDetails invocation does not require a new instance.
		NotASingleton.instanceCounter = NotASingleton.instanceCounter + 1;
		console.log("counter is", NotASingleton.instanceCounter);
	}

	public printDetails(message: string): void {
		console.log(message);
	}

}
