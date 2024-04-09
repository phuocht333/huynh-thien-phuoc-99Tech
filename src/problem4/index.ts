abstract class AbstractSumToN<T> {
  // TODO Can provide auto generate id for entity here (ex: uuid)  
  public readonly props: T;
  constructor(props: T) {
    this.props = props;
  }
}

function isInteger(value: any): boolean {
  return typeof value === 'number' && Number.isInteger(value);
}

class SumToN extends AbstractSumToN<number> {
  get inputNumb(): number {
    return this.props;
  }

  // Time complexity: O(n) - Space complexity: O(1)
  execBasicLoop(): number {
    let sum = 0;
    for (let i = 1; i <= this.inputNumb; i++) {
      sum += i;
    }
    return sum;
  }

  // Time complexity: O(n) - Space complexity: O(n)
  execRecursion(n?: number): number {
    const curMaxNumb = n || this.inputNumb;
    if (curMaxNumb <= 1) {
      return curMaxNumb;
    }
    return curMaxNumb + this.execRecursion(curMaxNumb - 1);
  }

  // Time complexity: O(1) - Space complexity: O(1)
  execFormula(): number {
    return (this.inputNumb * (this.inputNumb + 1)) / 2;
  }

  // Restrict the external creation to ensure that the class's internal state is properly managed., use create instead
  private constructor(n: number) {
    super(n);
  }

  public static create(n: number) {
    // TODO Add any Guard checking here => The passed input should be valid in any case to avoid unexpected error
    if (!Number.isInteger(n)) {
      throw new Error('Number is not integer');
    }

    if (!Number.isSafeInteger(n)) {
      throw new Error('MAX_SAFE_INTEGER error');
    }

    return new SumToN(n);
  }
}

// Try 5.5 or 9007199254740992 for error cases.
const sumToN = SumToN.create(5);

console.log('Your input:', sumToN.inputNumb);
console.log('Loop result:', sumToN.execBasicLoop());
console.log('Recursion result:', sumToN.execRecursion());
console.log('Formula result:', sumToN.execFormula());