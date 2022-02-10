import { v4 as uuidv4 } from 'uuid';
import { bag1, bag2, bag3, bag4, bag5 } from '../assets/products/pufferShoulderBag';
import { bankJeansJacket1, bankJeansJacket2, bankJeansJacket3, bankJeansJacket4, bankJeansJacket5 } from '../assets/products/bankJeansJacket';
import { rawSkullTee1, rawSkullTee2, rawSkullTee3, rawSkullTee4, rawSkullTee5 } from '../assets/products/rawSkullTee'
import { cementWashHoodie1, cementWashHoodie2, cementWashHoodie3, cementWashHoodie4, cementWashHoodie5 } from '../assets/products/cementWashHoodie'
import { badTargetTee1, badTargetTee2, badTargetTee3, badTargetTee4, badTargetTee5 } from '../assets/products/badTargetTee'
import { bunnyJellyHoodie1, bunnyJellyHoodie2, bunnyJellyHoodie3, bunnyJellyHoodie4, bunnyJellyHoodie5 } from '../assets/products/bunnyJellyHoodie'
import { doubleRawTee1, doubleRawTee2, doubleRawTee3, doubleRawTee4, doubleRawTee5 } from '../assets/products/doubleRawTee'
import { joggerPant1, joggerPant2, joggerPant3, joggerPant4, joggerPant5 } from '../assets/products/joggerPant'
import { kigaGile1, kigaGile2, kigaGile3, kigaGile4, kigaGile5 } from '../assets/products/kiraGile'
import { lacCardigan1, lacCardigan2, lacCardigan3, lacCardigan4, lacCardigan5 } from '../assets/products/lacCardigan'
import { pullOverSweater1, pullOverSweater2, pullOverSweater3, pullOverSweater4, pullOverSweater5 } from '../assets/products/pullOverSweater'
import { rabbitPutpet1, rabbitPutpet2, rabbitPutpet3, rabbitPutpet4, rabbitPutpet5 } from '../assets/products/rabbitPutpet'

const products = [
    {
        id: uuidv4(),
        name: 'puffer shoulder bag',
        slug: 'puffer-shoulder-bag',
        img1: bag1,
        img2: bag2,
        img3: bag3,
        img4: bag4,
        img5: bag5,
        price: 500000,
        size: [],
        description: 'PUFFER SHOULDER BAG | sở hữu TINH THẦN TRẢI NGHIỆM trên nhiều loại Garment khác nhau (về Form - Kỹ thuật xử lý), không chỉ của riêng Bad Habits, mà của toàn bộ team Double Bad Studio trong 2021 và cả năm 2022 nữa'
    },
    {
        id: uuidv4(),
        name: 'bank jeans jacket',
        slug: 'bank-jeans-jacket',
        img1: bankJeansJacket1,
        img2: bankJeansJacket2,
        img3: bankJeansJacket3,
        img4: bankJeansJacket4,
        img5: bankJeansJacket5,
        price: 900000,
        size: ['M', 'L'],
        description: 'Khi nhắc về 1 chiếc áo khoác trường tồn với thời gian, thì ai cũng sẽ nghĩ ngay đến Jeans Jacket đúng không nè? Có lẽ vì ưu điểm nổi bật khi bất chấp cả thời tiết nóng, lạnh và dễ dàng kết hợp để tạo ra nhiều outfit đa dạng khác nhau mà hôm nay BAD RABBIT CLUB cho ra mắt item mới với tên gọi BANK JEANS JACKET. Với những detail đậm chất nhà Thỏ như hoạ tiết in lụa và logo được thêu ở mặt sau.'
    },
    {
        id: uuidv4(),
        name: 'raw skull tee',
        slug: 'raw-skull-tee',
        img1: rawSkullTee1,
        img2: rawSkullTee2,
        img3: rawSkullTee3,
        img4: rawSkullTee4,
        img5: rawSkullTee5,
        price: 350000,
        size: ['S', 'M', 'L', 'XL'],
        description: ''
    },
    {
        id: uuidv4(),
        name: 'cement wash hoodie',
        slug: 'cement-wash-hoodie',
        img1: cementWashHoodie1,
        img2: cementWashHoodie2,
        img3: cementWashHoodie3,
        img4: cementWashHoodie4,
        img5: cementWashHoodie5,
        price: 700000,
        size: ['M', 'L', 'XL'],
        description: 'Drop 001: |CEMENT WASHED HOODIE|, với đầy đủ các tiêu chí tạo nên Signature của BAD HABITS: vẫn là form Hoodie Oversized must-have cho các dịp Lễ - Tết - Noel, vẫn là thiết kế ngôn ngữ đường phố và tone màu Cement Washed bụi bặm đặc trưng.'
    },
    {
        id: uuidv4(),
        name: 'bad target tee',
        slug: 'bad-target-tee',
        img1: badTargetTee1,
        img2: badTargetTee2,
        img3: badTargetTee3,
        img4: badTargetTee4,
        img5: badTargetTee5,
        price: 350000,
        size: ['S', 'M', 'L', 'XL'],
        description: 'BADTARGET TEE như một lời gửi gắm đến mọi người 1 góc nhìn tích cực hoàn toàn khác đến mọi người hãy biến những áp lực, căng thẳng trở thành động lực và luôn tự cân bằng mọi thứ để cuộc sống luôn lạc quan, vui vẻ'
    },
    {
        id: uuidv4(),
        name: 'bunny jelly hoodie',
        slug: 'bunny-jelly-hoodie',
        img1: bunnyJellyHoodie1,
        img2: bunnyJellyHoodie2,
        img3: bunnyJellyHoodie3,
        img4: bunnyJellyHoodie4,
        img5: bunnyJellyHoodie5,
        price: 650000,
        size: ['M', 'L', 'XL'],
        description: 'Sản phẩm đầu tiên THỎ 01 - [BUNNY JELLY HOODIE] với chất liệu nỉ bông dày dặn, đi cùng Graphic Jelly đáng yêu và phối màu BLUE tone vừa nổi bật, trendy nhưng lại dể dàng Mix-match cùng các items khác nhau để tạo ra 101 bộ Outfit không thể phù hợp hơn cho lịch trình "chạy show" ngày Tết của mọi người luôn nhaa'
    },
    {
        id: uuidv4(),
        name: 'double raw tee',
        slug: 'double-raw-tee',
        img1: doubleRawTee1,
        img2: doubleRawTee2,
        img3: doubleRawTee3,
        img4: doubleRawTee4,
        img5: doubleRawTee5,
        price: 350000,
        size: ['S', 'M', 'L', 'XL'],
        description: 'Họa tiết Full-Print - Tone màu trắng đen back-to-the-basic, chắc Thỏ cũng không cần phải nói thêm về độ hot của [DOUBLE RAW] này nữa đâu ha, mix match kiểu nào cũng ra Outfit sang xịn mịn luôn '
    },
    {
        id: uuidv4(),
        name: 'jogger pants',
        slug: 'jogger-pants',
        img1: joggerPant1,
        img2: joggerPant2,
        img3: joggerPant3,
        img4: joggerPant4,
        img5: joggerPant5,
        price: 650000,
        size: ['M', 'L', 'XL'],
        description: 'JOGGER PANTS sử dụng chất liệu kaki. Hai bên quần có thêm chiếc túi hộp được đính nút và gắn thêm mạc cao su'
    },
    {
        id: uuidv4(),
        name: 'kira gile',
        slug: 'kira-gile',
        img1: kigaGile1,
        img2: kigaGile2,
        img3: kigaGile3,
        img4: kigaGile4,
        img5: kigaGile5,
        price: 600000,
        size: ['M', 'L', 'XL'],
        description: 'KIRA GILE sử dụng vải nhung texture được dệt từ 1 sợi ngang và 1 sợi dọc tạo hiệu ứng xù trên bề mặt, cũng nhờ vào đó làm chất vải có độ co giãn tương tự các sản phẩm dệt kim. Trước ngực áo có thêm 1 phần chi tiết thêu chữ ký và bên còn lại được đính thêm mạc kim loại.'
    },
    {
        id: uuidv4(),
        name: 'lac cardigan',
        slug: 'lac-cardigan',
        img1: lacCardigan1,
        img2: lacCardigan2,
        img3: lacCardigan3,
        img4: lacCardigan4,
        img5: lacCardigan5,
        price: 900000,
        size: ['M', 'L', 'XL'],
        description: "LẠC CARDIGAN được lấy cảm hứng từ 'ÁO BÀ BA' - chiếc áo gắn liền với chúng ta từ muôn đời nay. Với hình ảnh chân chất, tần tảo, chịu thương chịu khó của người nông dân Việt, BAD thật sự muốn tôn vinh nét đẹp ấy, vừa mộc mạc lại vừa giản dị, gần gũi."
    },
    {
        id: uuidv4(),
        name: 'pull over sweater',
        slug: 'pull-over-sweater',
        img1: pullOverSweater1,
        img2: pullOverSweater2,
        img3: pullOverSweater3,
        img4: pullOverSweater4,
        img5: pullOverSweater5,
        price: 750000,
        size: ['M', 'L', 'XL'],
        description: 'PULL OVER SWEATER với chất liệu combed cotton với nhiều ưu điểm nổi bật như khả năng giữ ấm, chất liệu mềm mịn, khả năng hút ẩm tốt. Bên cạnh đó, vẫn là hoạ tiết đậm chất BAD RABBIT nhưng được phối màu "Glazed Ginger" cực kỳ mới lạ, có thể nói là lần đầu tiên luôn đó nên sẽ khiến cho bạn vô cùng tự tin và nổi bật khi đứng giữa chốn đông người.'
    },
    {
        id: uuidv4(),
        name: 'rabbit putpet',
        slug: 'rabbit-putpet',
        img1: rabbitPutpet1,
        img2: rabbitPutpet2,
        img3: rabbitPutpet3,
        img4: rabbitPutpet4,
        img5: rabbitPutpet5,
        price: 350000,
        size: ['S', 'M', 'L', 'XL'],
        description: 'Với RABBIT PUTPET, qua hình in chú Thỏ đồ chơi nằm trong bịch - cùng cảm hứng từ câu chuyện đồ chơi trong Toy Story 3, Thỏ mong muốn lan tỏa thông điệp: [Đừng vứt đi những món đồ chơi mà "đứa trẻ của chúng ta" từng xem là bạn thân nhất, hãy trao tặng "những người bạn" này cho một đứa trẻ khác, để "họ" một lần nữa được tận hưởng phút giây tuổi thơ dấu yêu, và một lần nữa được dấu yêu].'
    },
]

export const getProducts = (count) => {
    const max = products.length - count
    const start = Math.floor(Math.random() * max)
    return products.slice(start, start + count)
}

export default products;