async function generateMockElevatorResponse() {
  const mockResponse = {
    mongoResponse: {
      // Simular la respuesta de MongoDB
      status: 201,
      message: "Elevator Pitch creado exitosamente",
      data: {
        _id: "mocked_mongo_id",
        UserEntreprenuer: "prueba-1",
        story: "prueba-1",
        brandName: "prueba-1",
        whatSell: "prueba-1",
        howSell: "prueba-1",
        audienceTarget: "prueba-1",
        starProduct: "prueba-1",
        starProductDescription: "prueba-1",
        brandPersonality: "prueba-1",
        urlInstagram: "https://www.instagram.com/ttrippy_shi/?next=%2F",
        createdAt: "2024-05-17T12:00:00.000Z",
        updatedAt: "2024-05-17T12:00:00.000Z",
      },
    },
    responseAi: {
      // Simular la respuesta de ChatGPT
      choices: [
        {
          finish_reason: "stop",
          index: 0,
          message: {
            content: "Aquí está tu Elevator Pitch personalizado.",
            role: "assistant",
          },
          logprobs: null,
        },
      ],
      created: Date.now(),
      id: "mock-chat-completion",
      model: "gpt-3.5-turbo-mock",
      object: "chat.completion",
      usage: {
        completion_tokens: 10,
        prompt_tokens: 40,
        total_tokens: 50,
      },
    },
  };

  return mockResponse;
}

async function main() {
  const mockResponse = await generateMockElevatorResponse();
  console.log(mockResponse);
}

main();
