import { ContainerMemory } from "../Containers/ContainerMemory.js";
import { ContainerFilesystem } from "../Containers/ContainerFilesystem.js";

const DB_TYPE = "filesystem";

const PRODUCTS_FILENAME = 'productos';
const MESSAGES_FILENAME = 'messages';

const ProductDao = DB_TYPE === 'filesystem' ? new ContainerFilesystem(PRODUCTS_FILENAME) : new ContainerMemory();

const MessagesDao = DB_TYPE === 'filesystem' ? new ContainerFilesystem(MESSAGES_FILENAME) : new ContainerMemory();

export { ProductDao, MessagesDao };