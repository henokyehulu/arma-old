import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const categories = await prisma.category.createMany({
    data: [
      {
        name: "Business",
        slug: "business",
        status: "PUBLISHED",
      },
      {
        name: "Productivity",
        slug: "productivity",
        status: "PUBLISHED",
      },
      {
        name: "Social Networking",
        slug: "social-networking",
        status: "PUBLISHED",
      },
      {
        name: "Artificial Intelligence",
        slug: "artificial-intelligence",
        status: "PUBLISHED",
      },
    ],
  });
  const remote = await prisma.company.upsert({
    where: {
      name: "Remote",
    },
    update: {},
    create: {
      website: "https://remote.com/",
      avatar:
        "https://upcdn.io/FW25bBB/image/content/app_logos/3296e20f-e44e-4e19-91b0-6d079c92a2ee.png",
      name: "Remote",
      motto: "Global HR Solutions & Employment Tools for Distributed Teams",
      legalName: "Remote Technology, Inc",
      category: {
        connect: {
          name: "Business",
        },
      },
      logos: {
        createMany: {
          data: [
            {
              url: "https://upcdn.io/FW25bBB/image/content/app_screens/da9aeaca-427a-4c27-a44b-4f42969fc550.png",
            },
            {
              url: "https://upcdn.io/FW25bBB/image/content/app_screens/48c8f344-29d8-40e6-904d-324b9745bba9.png",
            },
          ],
        },
      },
    },
  });
  const fibery = await prisma.company.upsert({
    where: {
      name: "Fibery",
    },
    update: {},
    create: {
      website: "https://fibery.io/",
      avatar:
        "https://upcdn.io/FW25bBB/image/content/app_logos/adbf9012-beee-4df8-a7bd-90a01a0175ac.png",
      name: "Fibery",
      motto: "Build your company workspace with no code",
      legalName: "Fibery Limited",
      category: {
        connect: {
          name: "Productivity",
        },
      },
      logos: {
        createMany: {
          data: [
            {
              url: "https://upcdn.io/FW25bBB/image/content/app_screens/777a86bd-8f61-4c0e-a868-7609a76f7556.png",
            },
            {
              url: "https://upcdn.io/FW25bBB/image/content/app_screens/8836973f-c1b1-48a6-8a97-66cecfd11ae0.png",
            },
          ],
        },
      },
    },
  });
  const circle = await prisma.company.upsert({
    where: {
      name: "Circle",
    },
    update: {},
    create: {
      website: "https://www.circle.so/",
      avatar:
        "https://upcdn.io/FW25bBB/image/content/app_logos/3e35c9ce-9771-4b55-a896-018f95d8d751.png",
      name: "Circle",
      motto: "The all-in-one community platform",
      legalName: "CircleCo, Inc.",
      category: {
        connect: {
          name: "Social Networking",
        },
      },
      logos: {
        createMany: {
          data: [
            {
              url: "https://upcdn.io/FW25bBB/image/content/app_screens/2c00d6f2-3a3c-49d1-bcc6-d173e825ccba.png",
            },
            {
              url: "https://upcdn.io/FW25bBB/image/content/app_screens/e515346f-3924-4396-9669-175b6d328ba9.png",
            },
          ],
        },
      },
    },
  });
  const bard = await prisma.company.upsert({
    where: {
      name: "Bard",
    },
    update: {},
    create: {
      website: "https://bard.google.com",
      avatar:
        "https://upcdn.io/FW25bBB/image/content/app_logos/fb9b2738-d6c8-4e28-902a-2f17349e5256.png",
      name: "Bard",
      motto: "Chat Based AI Tool from Google",
      legalName: "Google LLC",
      category: {
        connect: {
          name: "Artificial Intelligence",
        },
      },
      logos: {
        createMany: {
          data: [
            {
              url: "https://upcdn.io/FW25bBB/image/content/app_screens/c9e0bfa6-0366-48b4-b156-0a53b634b14a.png",
            },
            {
              url: "https://upcdn.io/FW25bBB/image/content/app_screens/d1a6ade3-462b-4de9-9698-e3b535d26892.png",
            },
          ],
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
