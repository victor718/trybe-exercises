/*
  Operador
    $lt     ( <  )  menor que
    $lte    ( <= )  menor igual
    $gt     ( >  )  maior que
    $gte    ( >= )  maior igual
    $eq     ( == )  igual --  Esse operador é equivalente ao filtro { campo: <valor> } e não tem nenhuma diferença de performance.
    $ne     ( != )  diferente
    $in     ()      comparações de igualdade com mais de um valor no mesmo campo
    $nin    ()      seleciona os documentos em que o valor do campo filtrado não é igual ao especificado no array , ou o campo não existe.
    
    =================================================================
    $not    ()      executa uma operação lógica de NEGAÇÃO

    db.inventory.find({ price: { $not: { $gt: 1.99 } } })
    =================================================================
    
    =================================================================
    $or   ()        executa a operação lógica OU em um 
                    array de uma ou mais expressões

    db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })
    =================================================================

    =================================================================
    $nor  ()        executa uma operação lógica de NEGAÇÃO , porém,
                    em um array de uma ou mais expressões,
    
    db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })

    Contêm o campo price com valor diferente de 1.99 
    e o campo sale com valor diferente de true ;

    Ou contêm o campo price com valor diferente de 1.99 
    e não contêm o campo sale ;

    Ou não contêm o campo price e contêm o campo 
    sale com valor diferente de true ;
    Ou não contêm o campo price e nem o campo sale .
    =================================================================

    =================================================================
    $and    ()      executa a operação lógica E num array de uma 
                    ou mais expressões
    
    =================================================================

    
*/ 

