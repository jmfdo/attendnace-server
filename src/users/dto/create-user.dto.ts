import { IsString, IsEmail, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  @IsNotEmpty()
  @IsString()
  password: string;
}

// @IsAlpha() - Asegura que el valor solo contenga caracteres alfabéticos.
// @IsAlphanumeric() - Asegura que el valor solo contenga caracteres alfanuméricos.
// @IsBoolean() - Asegura que el valor sea un booleano.
// @IsDate() - Asegura que el valor sea una fecha válida.
// @IsEmail() - Asegura que el valor sea una dirección de correo electrónico válida.
// @IsNotEmpty() - Asegura que el valor no esté vacío (undefined, null, cadena vacía).
// @IsNumber() - Asegura que el valor sea un número.
// @IsEnum() - Asegura que el valor esté incluido en un conjunto de valores permitidos (enum).
// @IsArray() - Asegura que el valor sea un array.
// @IsOptional() - Permite que el valor sea opcional (puede ser undefined).
// @IsIn() - Asegura que el valor esté presente en un conjunto dado de valores.
// @IsUrl() - Asegura que el valor sea una URL válida.
// @MinLength() - Asegura que la longitud del valor sea igual o mayor que el valor mínimo especificado.
// @MaxLength() - Asegura que la longitud del valor sea igual o menor que el valor máximo especificado.
// @IsCreditCard() - Asegura que el valor sea un número de tarjeta de crédito válido.
// @IsUUID() - Asegura que el valor sea un UUID (identificador único universal) válido.
// @IsIP() - Asegura que el valor sea una dirección IP válida.
// @IsNotEmptyObject() - Asegura que el valor no sea un objeto vacío.
// @IsMongoId() - Asegura que el valor sea un identificador válido de MongoDB.
// @IsPhoneNumber() - Asegura que el valor sea un número de teléfono válido.
// @IsPositive() - Asegura que el valor sea un número positivo.
// @IsNegative() - Asegura que el valor sea un número negativo.
// @IsDecimal() - Asegura que el valor sea un número decimal.
// @IsISBN() - Asegura que el valor sea un número de ISBN válido.
// @IsJSON() - Asegura que el valor sea una cadena JSON válida.
// @IsCurrency() - Asegura que el valor sea una cantidad de dinero válida.
// @IsLatitude() - Asegura que el valor sea una latitud válida.
// @IsLongitude() - Asegura que el valor sea una longitud válida.
// @IsMilitaryTime() - Asegura que el valor sea una hora en formato militar válida.
// @IsSemVer() - Asegura que el valor sea una versión semántica válida.
// @IsPostalCode() - Asegura que el valor sea un código postal válido.
// @IsUppercase() - Asegura que todas las letras del valor estén en mayúsculas.
// @IsLowercase() - Asegura que todas las letras del valor estén en minúsculas.
// @IsHexColor() - Asegura que el valor sea un código de color hexadecimal válido.
// @IsBase64() - Asegura que el valor sea una cadena codificada en base64 válida.
// @IsUUIDVersion() - Asegura que el valor sea un UUID de una versión específica.
// @IsJWT() - Asegura que el valor sea un token JWT (JSON Web Token) válido.
