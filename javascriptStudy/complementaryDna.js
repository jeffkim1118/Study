function DNAStrand(dna){
    //your code here
    const chart = {
      A : 'T',
      C : 'G',
      T : 'A',
      G : 'C'
    }

    return dna.split('').map(c => chart[c]).join('')
    
  }

  console.log(DNAStrand('ATTGC'))