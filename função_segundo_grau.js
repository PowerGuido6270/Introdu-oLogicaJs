function resolverEquacaoSegundoGrau(a,b,c){
    // Passo 1: calcular o delta
    let delta = b*b-4*a*c

    // Passo 2: verificar se o delta é zero, negativo ou positivo
    if (delta<0){
        // se o delta for negavito, a equação não tem raizes reais
        console.log("A equação não tem raizes reais")

    }
    else if (delta===0){
        // se delta for igual a zero, a equalção tem duas raizes reais
        console.log("A equação tem raizes iguais.")
    }
    else {
    // se o delta for positivo, a equação tem duas raizes iguais
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b + Math.sqrt(delta))/(2*a)

    console.log("A equação tem duas raizes reias: x1= ", x1, "e x2= ", x2)
}



}

resolverEquacaoSegundoGrau(1, -3, 2)