let mumuLiberian = {id : "1",
                    available : "true",
                    count : "1",
                    name : "liberian",
                    author : "the liberian's friend wrote it"                    
}
let correctedMumuLiberiansMumuness = {id : Number(mumuLiberian.id),
                                      available : Boolean(mumuLiberian.available),
                                      count : Number(mumuLiberian.count),
                                      name : String(mumuLiberian.name),
                                      author : String(mumuLiberian.author)
}
console.log(correctedMumuLiberiansMumuness)
