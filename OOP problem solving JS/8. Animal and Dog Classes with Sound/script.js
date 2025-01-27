class Animal{
  constructor(species,sound){
    this.species = species;
    this.sound = sound;
  }
  animalSound(){
    console.log(`Animal sound: ${this.sound}`);
  }
}
class Dog extends Animal{
  constructor(species,sound,color){
    super(species,sound,color);
    this.color = color;
  }
  animalSound(){
    super.animalSound();
    console.log(`Color: ${this.color}`);
  }
}
const dog = new Dog('Dog', 'Woof woof!', 'Brown')
dog.animalSound();