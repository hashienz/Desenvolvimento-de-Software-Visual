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

bool trocou;

do
{
    trocou = false;
    for (int i = 0; i < vetor.Length - 1; i++)
    {
    
        if (vetor[i] > vetor [i + 1])
        {
            int auxiliar = vetor[i];
            vetor[i] = vetor[i + 1];
            vetor[i + 1] = auxiliar;
            trocou = true;
        }
    }
} while (trocou);


Console.WriteLine("\n");
for (int i = 0; i < vetor.Length; i++)
{
    Console.Write(vetor[i] + " ");
}



