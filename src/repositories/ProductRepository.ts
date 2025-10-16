import { PrismaClient } from "@prisma/client";
import { IProduct } from "@/types/product";

const prisma = new PrismaClient();

class ProductRepository {
  async findAll() {
    return prisma.product.findMany({ where: { isActive: true }, orderBy: { name: 'asc' } });
  }

  async create(data: IProduct) {
    return prisma.product.create({ data });
  }

  async findById(id: string) {
    return prisma.product.findFirst({ where: { id } });
  }

  async update(id: string, data: Partial<{ name: string, description: string, stock: number, price: number }>) {
    return prisma.product.update({ where: { id }, data });
  }
}

export default new ProductRepository();