
public class HelloWorld {

    public HelloWorld() {

    }

    private abstract class Dog {
        public Dog() {
			this("Sparky");
        }

        public Dog(String pName) {
            name = pName;
        }

        public void SetName(String pName) {
            name = pName;
        }

        public String GetName() {
            return name;
        }

        protected String name;
    }
	
	private class Weiner extends Dog {
		public Weiner() {
			super();
		}
		
		public Weiner(String pName) {
			super(pName);
		}
		
		
		public String GetName() {
			return name + " is long";
		}
	}

    private static void foo(Dog d) {

        // d = new Dog("ZZZZ");
        d.SetName("Scooby is very awesome!");
    }
	
	private void Recover() {
		System.out.println("Recover");
	}
	
	// Interface vs Inheritance and Delegation

    public static void main( String[] args ){
        
        HelloWorld h = new HelloWorld();

        Dog t = h.new Weiner("Scooby");
        foo(t);
        System.out.println (t.GetName());
		
		Weiner d = h.new Weiner("Daisy");
		System.out.println (d.GetName());
		
		try {
//			Weiner bad = null;
			Weiner bad = h.new Weiner("Dot");;
			System.out.println (bad.GetName());
		}catch (Throwable thro) {
			System.out.println("Catch" + thro);
			
			h.Recover();
		}finally {
			 System.out.println("Finally");
		}
		
		
		System.out.println("End of Main");
		
		System.exit(0);
    }
}
