import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BearerStrategy, ITokenPayload, VerifyCallback, IBearerStrategyOption } from 'passport-azure-ad';


@Injectable()
export class AuthService extends PassportStrategy(BearerStrategy, 'azure-ad') {
    constructor() {
        super({
          identityMetadata: 'https://login.microsoftonline.com/xxxxxxx/v2.0/.well-known/openid-configuration',
          clientID: 'xxxxxxx',
          validateIssuer: true,
          loggingLevel: 'info',
          passReqToCallback: false,
        } as IBearerStrategyOption);
      }
    
      async validate(payload: ITokenPayload, done: VerifyCallback): Promise<any> {
        // Aquí puedes validar el payload del token y hacer cualquier lógica adicional que necesites
        // Por ejemplo, podrías buscar al usuario en tu base de datos y devolver ese usuario
        done(null, payload);
      }

      async login(email: string, password: string): Promise<any> {
        // Aquí necesitarías implementar la lógica para autenticar al usuario con Azure AD utilizando su correo electrónico y contraseña
        // Esto dependerá de cómo hayas configurado tu aplicación en Azure AD
      }
}
