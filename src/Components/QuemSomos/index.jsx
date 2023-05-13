import {Section2, Content, Card, Cards, Asides} from './styled'

import lauren from '../../assets/Images/logos/lauren.jpg'
import patricia from '../../assets/Images/logos/patricia.jpg'


const QuemSomos = () =>{

const avatar = [
    {id:1, src: lauren},
    {id:2, src: patricia}
]

    return(
        <Section2>
            <h1>Quem Somos</h1>
            <Content>
                <Cards>
                    <Card>
                        {avatar.map((avatar) => {
                        if (avatar.id === 1) {
                        return <img key={avatar.id} src={avatar.src} alt="altLog" />;
                        }
                        return null;
                        })}
                        <div className="rodape">
                            <h3>laurenn ferreira cézar</h3>
                            <span>Cau: 248612-1</span>
                        </div>
                    </Card>
                    <Card>
                        {avatar.map((avatar) => {
                        if (avatar.id === 2) {
                        return <img key={avatar.id} src={avatar.src} alt="altLog" />;
                        }
                        return null;
                        })}
                        <div className='rodape'>
                            <h3>Patricia silva de paula</h3>
                            <span>Cau: 249968-1</span>
                        </div>
                    </Card>
                </Cards>
                    <Asides>
                        <p>
                        De um convívio e parceria que vem desde a universidade, nasce o Ao² Studio de Arquitetura e é com imensa gratidão que damos início ao nosso perfil profissional, um mecanismo com a finalidade de demonstrar o nosso trabalho e fazer com que as pessoas apreciem e entendam arquitetura como sinônimo de transformação. 
                        </p>
                        <p>
                        O nome Ao² (Ao Quadrado) sugere que a arquitetura se faz em conjunto, multiplicar, somar, considerar que as novas ideias e possibilidades podem agregar e melhorar o resultado final de um projeto. Nosso objetivo é trazer a arquitetura para a vida dos clientes, de maneira viável e flexível, considerando sempre suas histórias e personalidades, e assim entregar projetos únicos que realizam sonhos, acolhem lembranças e despertam sentimentos.
                        </p>
                </Asides>
            </Content>

            
        </Section2>
    )

}
export default QuemSomos