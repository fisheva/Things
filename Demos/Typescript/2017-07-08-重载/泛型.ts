function identity<T>(arg:T): T{
    return arg;
}

interface lengthWise{
    length: number;
}

function loggingIdentity<T extends lengthWise>(arg: T): T{
    return arg;
}

loggingIdentity({value: 3, length: 1});


enum exam {
    A = 1,
    B,
    C = 2
}

console.log(exam.B);