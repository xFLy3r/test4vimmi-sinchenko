import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = 3000;
  await app.listen(port, () => console.log(`Running on ${port} port...`));
}
bootstrap();
