const jsname = '📚中青看点任务'
const $ = Env(jsname)
//0为关闭日志，1为开启,默认为0
const logs = 0;
//0为关闭通知，1为所有通知,默认为0
const notifyInterval = 1;
//通知风格
let tz = '';


////////////////////////// 【liya-i-20211108-Time】///////////////////////////////////////
var hour = '';
var minute = '';
if ($.isNode()) {
  hour = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getHours();
  minute = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getMinutes();
} else {
  hour = (new Date()).getHours();
  minute = (new Date()).getMinutes();
}
//现在毫秒格式(13位数)
let todaytimems = Math.round(Date.now())
//现在秒格式(10位数)
let todaytimes = Math.round(Date.now() / 1000)
//今天20200101格式
let today1 = formatDateTime(new Date());
//今天2021.01.30 17:32:01格式
let today2 = formatDateTime(todaytimes);


////////////////////////// 【liya-i-20211108-Cookie】///////////////////////////////////////

let sign1api = 'CommonReward/toGetReward.json',sign1Body = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let sign2api = 'CommonReward/toDouble.json',sign2Body = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let syBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let syspBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let jshbBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let sjbxBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let wzydBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let gkspBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let mrrw3Body = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let mrrw6Body = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let mrrw9Body = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let yd5fzBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let yd60fzBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let kflsp1Body = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let kflsp2Body = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let flkkzBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let dkzBody = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let cjz1Body = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';

let cjz2Body = 'p=H4W7v2WlUNXk=4xp1iAu3WkZE_Sybg06y0bDgiCI48MqU4JFXOzU29Jr-y1TBRIm8bzBRB2Ya_l9MN-A-Js-dKEfO3KX_Yd9YBrHEpp58qVxbOmxZzhq_oCnhIlCoE8WglLRUeNIZk8k6jvKR68SHJXQ8vbrFnEecxpQKESqo3itbWddqS34gk9-7KJzYbAN-ENKV1_nWQl3kIMacO3YANjyxuNyPOYwMx45SmZWd5sJ1sNmgQ7uh6isd5C6N54wXikVpRrpNf6VbKrinlHEDxGolKfIwH6GxXl_kBsoL848e9iPnKfwiN92WZQ2IECC5Qv-MIGWY_paIjYJ-4iGR6e5V2lgjVmE3xkxyZ5dpAhd1xcJgzChw8wmvHq3M0jyB1SXad7VPDN8215UWCFBmaEuzTum4Xf_2bTbr56YDVZyB7dImVleNftHWi3f3ySu6IT2Ak9pI9m8_fple1qzC-oDdtH758PXzdhFXkCrq7ikK5pO1r5TXw9crZ0Hzxc4QNL14HkAf-b657HGpw75QdyojmDzNwPzjfFZjDVZDtl5Wzcpo55t6yvy5njDKLnr2yYYMCL10kihs3YsgOQQ_HlgvNhNdFQHsUXz_e_4SuBvPU4jYOSQrORaQTFCZwsQWGd0sQ-EzdmD6Ei66EsTd3EWMXoWHKv5G37Q7eiVamNUTVrZY8FEhGQIYB2EQrIz_By5pAbfUZ6VpxxxDKWpDCnxK_75NbMJ5JHB2gDo0NnhJy_tsf-mOcQFcOc_3b1ycklQXZQm904K2KMT2ywARlGjAJhm5PHYtrNkrp42G5xPXCK3GnTCK8jOURhz_ei1WwPK-rnbaQlQdvHmDUIAHQGlFU0Hz1eccGEVj27S-6PjYEMBCjADsea_RezjWW5kmDrt3UQ7fVhwo5BBLAlPw5BlXYIZTKjdWAwrOZ_0yu3ag6WlQLGnU77Idzt3V3P2lmKqtoA87t0WlzJNhq48gXdYg5UmfxKrF_g7RQhVxm5hr_5sMOfdk4-ED0GdZTvAsAS7l7vO0MiVjgXRAPCRyp1EJFxZEGL99i_HuNFYOinEP0lmaY3OU_-dE-lJept77sSYVSnqQ8Zii7HY-GpUQi6FXEkVxJy2jtdXV10i_Gev4ldZMpUVuzZ9_ERjic_6mUvjHHahh5RwVk54sUL3dd59NYi6-4724cod8CjCYKsbfqi';


////////////////////////// 【liya-i-20211108-Accounts & Control】///////////////////////
!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
    await sign1();
    if(minute < 30)
    {
       await syjl(i);
       await $.wait(1000);
       await sysp();
       await $.wait(1000); 
    }
    if(minute == 30)
    {
        await jshb();
        await $.wait(1000); 
    }
    if((hour == 0) || (hour == 2) || (hour == 4) || (hour == 6) || (hour == 8) || (hour == 10) || (hour == 12) || (hour == 14) || (hour == 16) || (hour == 18) || (hour == 20) || (hour == 22))
    {
        await sjbx();
        await $.wait(1000); 
    }
    if((hour == 8) || (hour == 12) || (hour == 13) || (hour == 22) || (hour == 23))
    {
    await wzyd();
    await $.wait(1000);
    await gksp();
    await $.wait(1000);
    await mrrw3();
    await $.wait(1000);
    await mrrw6();
    await $.wait(1000);
    await mrrw9();
    await $.wait(1000);
    await yd5fz();
    await $.wait(1000);
    await yd60fz();
    await $.wait(1000);
    await kflsp1();
    await $.wait(1000);
    await kflsp2();
    await $.wait(1000);
    await flkkz();
    await $.wait(1000);
    }

    //await dkz();
    //await $.wait(1000);

    //await cjz1();
    //await $.wait(1000);

    await showmsg2();
    await $.wait(1000);
 
}


////////////////////////// 【liya-i-20211108-Notify】///////////////////////////////////////
//通知
async function showmsg2() {
  if (notifyInterval == 1) {
    if ($.isNode()) {
      if ((hour == 0 && minute <= 5) || (hour == 8 && minute <= 5) || (hour == 12 && minute <= 5) || (hour == 23 && minute <= 5)) {
        await notify.sendNotify($.name, tz)
      }
    } else {
      if ((hour == 0 && minute <= 5) || (hour == 8 && minute <= 5) || (hour == 12 && minute <= 5) || (hour == 23 && minute <= 5)) {
        $.msg(cc, '', tz);
      }
    }
  } else if (notifyInterval == 0) {
    console.log(cc + '' + tz);
  }
}


///////////////////////////【liya-i-20211108-Network request】//////////////////////////////////
//签到
function sign1() {
  return new Promise(resolve => {
    $.post((sign1api,sign1Body), async(err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`签到结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`签到成功，获得 ${result.items.score} 金币！`)
				console.log(`开始执行 ${result.items.button.title} ---`)
				await $.wait(30000);
				await sign2();
          } else {
			  console.log(`今日已签到:${JSON.stringify(result)}\n`)
        }
      }
    }
  }	catch (e) {
     $.logErr(e, resp)
     } finally {
        resolve();
      }
	})
  })
}
//签到翻倍
function sign2() {
  return new Promise(resolve => {
    $.post((sign2api,sign2Body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`签到翻倍结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`签到翻倍成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`签到翻倍失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//首页奖励
function syjl() {
  return new Promise(resolve => {
    $.post((syBody), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`首页奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`首页奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`首页奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//首页视频奖励
function sysp() {
  return new Promise(resolve => {
    $.post((syspBody), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`首页视频奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`首页视频奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`首页视频奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//计时红包奖励
function jshb() {
  return new Promise(resolve => {
    $.post((jshbBody), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`计时红包奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`计时红包奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`计时红包奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//随机定时宝箱
function sjbx() {
  return new Promise(resolve => {
    $.post((sjbxBody), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`随机宝箱奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`随机宝箱奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`随机宝箱奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//文章阅读宝箱
function wzyd() {
  return new Promise(resolve => {
    $.post((wzydBody), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`文章阅读奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`文章阅读奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`文章阅读奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//观看视频宝箱
function gksp() {
  return new Promise(resolve => {
    $.post((gkspBody), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`观看视频奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`观看视频奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`观看视频奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//每日任务3宝箱
function mrrw3() {
  return new Promise(resolve => {
    $.post((mrrw3Body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`每日任务3奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`每日任务3奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`每日任务3奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//每日任务6宝箱
function mrrw6() {
  return new Promise(resolve => {
    $.post((mrrw6Body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`每日任务6奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`每日任务6奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`每日任务6奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//每日任务9宝箱
function mrrw9() {
  return new Promise(resolve => {
    $.post((mrrw9Body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`每日任务9奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`每日任务9奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`每日任务9奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//阅读5分钟宝箱
function yd5fz() {
  return new Promise(resolve => {
    $.post((yd5fzBody), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`阅读5分钟奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`阅读5分钟奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`阅读5分钟奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//阅读60分钟宝箱
function yd60fz() {
  return new Promise(resolve => {
    $.post((yd60fzBody), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`阅读60分钟奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`阅读60分钟奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`阅读60分钟奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//看福利视频任务
function kflsp1() {
  return new Promise(resolve => {
    $.get((kflsp1Body), async(err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`看福利视频结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`看福利视频成功！`)
          } else {
			  console.log(`看福利视频失败:${JSON.stringify(result)}`)
        }
      }
    }
  }	catch (e) {
     $.logErr(e, resp)
     } finally {
        resolve();
      }
	})
  })
}
//看福利视频宝箱
function kflsp2() {
  return new Promise(resolve => {
    $.post((kflsp2Body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`看福利视频奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`看福利视频奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`看福利视频奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//福利看看赚宝箱
function flkkz() {
  return new Promise(resolve => {
    $.post((flkkzBody), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`福利看看赚奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`福利看看赚奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`福利看看赚奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//打卡赚
function dkz() {
  return new Promise(resolve => {
    $.post((kflsp2Body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`看福利视频奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`看福利视频奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`看福利视频奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}
//抽奖赚
function cjz() {
  return new Promise(resolve => {
    $.post((kflsp2Body), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(resp)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (safeGet(data)) {
            const result = JSON.parse(data);
			//console.log(`看福利视频奖励结果：${JSON.stringify(result)}\n`)
			if (result.success == true) {
				console.log(`看福利视频奖励成功，获得 ${result.items.score} 金币！ `)
			} else {
				console.log(`看福利视频奖励失败:${JSON.stringify(result)}\n`)
			}
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}


///////////////////////////【liya-i-20211108-Customize】//////////////////////////////////
//解码URIcode
function URIcodetranslate(code) {
  return decodeURIComponent(code);
}
//毫秒时间戳改日期 2021.01.08 05:30:13
function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}
//毫秒时间戳转时间 20200108
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m + d;
};

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
