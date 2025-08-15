int tamanho = 100;
int[] vetor = new int[tamanho];

Random random = new Random();
for (int i = 0; i < vetor.Length; i++)
{
    vetor[i] = random.Next(1000);
}

for (int i = 0; i < vetor.Length; i++)
{
    Console.Write(vetor[i] + " ");
}

// Ordenar com função 
Array.Sort(vetor);

foreach (int n in vetor)
{
    Console.WriteLine(n);
}






