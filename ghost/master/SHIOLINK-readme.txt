===============================================================
SHIOLINK.DLL�F�x�v���L�VDLL
===============================================================

��SHIOLINK�Ƃ́H
����PIPE�ʐM�𗘗p�����q�v���Z�X�Ƃ̒ʐM�v���L�VSHIORI�ł��B�N
�����Ɏw�肳�ꂽexe�t�@�C����ʃv���Z�X�ŋN�����A�{�̂��瑗���
��SHIORI REQUEST���N������exe�̕W�����o�͂ւ̂����ɕϊ����A
���̌��ʂ�{�̂ɕԂ��܂��B


�����C�Z���X
�{�\�t�g�E�F�A��ghost�����Ɋւ��ẮA�C��BSD���C�Z���X�Ƃ��܂��B
���݂�shell�ɂ��ẮA�t���[�V�F���z�z�҂̃��C�Z���X�ɏ]���Ă�
�������B

�E�C��BSD���C�Z���X���{���
http://sourceforge.jp/projects/opensource/wiki/licenses%2Fnew_BSD_license


������i�h�̗��j
dll ����� ghost   : �ǂ��ƃX�e�[�V����
shell              : ���e��Ɓi�t���[�V�F���u���R�Ȃ݂����v�j
�g�p���C�u�������ɂ��Ắu�r���h�ɂ��āv���Q�ƁB


���z�z�t�@�C��
�T���v���S�[�X�g(����ɂ�.Net Framework 2.0���K�v�ł�)


���f�B���N�g���\��
[GHOST-DIR]
����[ghost]
���@�@�@[master]
���@�@�@�@����descript.txt�@�FSHIORI�ݒ�L�q�t�@�C��
���@�@�@�@����SHIOLINK.dll�@�F�v���L�VSHIORI DLL
���@�@�@�@����SHIOLINK.ini�@�F�v���L�VSHIORI��INI�t�@�C��
���@�@�@�@���@�@�@�@�@�@�@�@�@(DLL���̊g���q��.ini�ɂ�������)
���@�@�@�@����LINKSHIO.exe�@�F�v���L�V�x���Ăяo��exe
���@�@�@�@�@�@�@�@�@�@�@�@�@�@(�T���v���B�v.Net Framework 2.0)
����[shell]
�@�@�@...


���ݒ�t�@�C���̋L�q
SHIOLINK.ini
*--------------------------------------------------------------
[SHIOLINK]
; �R�}���h���C��:
commandline = cscript /Nologo LINKJS.js

; �������[�h: ANSI(Shift_JIS) / UTF-8 �̉��ꂩ
charmode  = ANSI

[LOGGING]
; ���O�t�@�C����:
file  = SHIOLINK.log

; ���O���x��: debug / info / warn / error / fatal / none
level = debug
*--------------------------------------------------------------


���N�������exe�̊�
SHIOLINK.dll�͎w�肳�ꂽexe�Ȃǂ��N�����܂����A�N���ɐ旧����
�̐ݒ���s���܂��B

    * �J�����g�f�B���N�g����[/ghost/master]�f�B���N�g����
    * exe��STDIN/STDOUT�ɁASHIOLINK.dll�̓����p�C�v���Ȃ�

�܂�Aexe���́A[/ghost/master]�f�B���N�g���ŋN�����ꂽ�Ɖ���
���A�W�����o�͂𑊎�ɃR�}���h�����𐏎��s���΂������ƂɂȂ��
���B���������Ȃǂ̏ꍇ�͕W�����͂ɑ΂��K���Ƀe�L�X�g�𓊓�����
��邱�ƂŁA�������s�����Ƃ��ł��܂��B

# >> LINKSHIO.exe < request.txt > response.txt
#   *����ŁAresponse.txt�Ɍ��ʂ��Ԃ�


���ʐM�v���g�R��
�{�V�X�e���̕����G���R�[�h��UTF-8/ANSI(SHIFT-JIS)�̑I���ł��B

SHIORI REQUEST�ɁA���������p�̃R�}���h���኱�ǉ����Ă��܂��B

��) --> �x�v���L�V��request
    <-- exe����response
*--------------------------------------------------------------
1 | --> *L:C:\[�ȗ�]\ghost\SHIOLINK\ghost\master
  | <-- [�����Ȃ�]
  |
*--------------------------------------------------------------
2 | --> *S:F6BA264E-AEA9-4886-B291-01C4664C504D
  |
*--------------------------------------------------------------
3 | --> *S:F6BA264E-AEA9-4886-B291-01C4664C504D
  |
*--------------------------------------------------------------
4 | --> GET SHIORI/3.0
  |     Sender: SSP
  |     Charset: UTF-8
  |     SecurityLevel: local
  |     ID: OnBoot
  |     Reference0: ����LINK�I
  |     [��s]
  |
*--------------------------------------------------------------
5 | <-- SHIORI/3.0 200 OK
  |     Charset: UTF-8
  |     Sender: LINKSHIO
  |     Value: \u\s[10]\h\s[0]���āA[�`�ȗ��`]\-
  |     [��s]
  |
*--------------------------------------------------------------
6 | --> *U:
  | <-- [�����Ȃ��A�I��]
*--------------------------------------------------------------


������
���ׂĂ̂����͉��s�ŋ�؂��܂��B*�Ŏn�܂�s�������R�}��
�h�ł��B*�Ŏn�܂�Aexe�����m��Ȃ��R�}���h������Ă����ꍇ�͂�
�ׂēǂݎ̂ĂĂ��������B

   1. [*L:]�R�}���h��[SHIORI::load]���߂ɑ������܂��B�N������
      [*L:(loaddir)]�Ƒ����܂��B���̃R�}���h�ɑ΂��鉞���͂�
      ��܂���B

   2. [*S:]�R�}���h��[SHIORI::request]���߂̓����̂��߂ɔ��s��
      ��܂��B[*S:(GUID)]�ƂȂ��Ă��܂��B

   3. exe���́A����[*S:]�R�}���h�̓��e�����̂܂܃I�E���Ԃ�����
      ���������BSHIOLINK.DLL�͂��̉�����҂���[SHIORI::request]
      �{�̂𑗐M���܂��B

   4. [SHIORI::request]�{�̂ł��B��s�܂ł����N�G�X�g�ł��B
      exe���͋�s������܂Ńe�L�X�g��ǂݍ���ł��������B

   5. [SHIORI::request]�ɑ΂��郌�X�|���X�ł��B��s�܂ł����X�|
      ���X�����ƂȂ�܂��B

   6. [*U:]�R�}���h��[SHIORI::unload]���߂ɑ������܂��Bexe���͏I
      ���������s���A�����ɏI�����Ă��������B���̃R�}���h�ɑ΂���
      �����͂���܂���B


���r���h�ɂ���
SHIOLINK.DLL�ł́A�ȉ��̃��C�u�����𗘗p���Ă��܂��B

�EPOCO C++ Libraries
  http://www.pocoproject.org/

�EINIMONI C++�pini�t�@�C���ǂݏ����e���v���[�g�쐬�\�t�g
  http://www18.ocn.ne.jp/~amedas/inimoni/

�ERLOG�i�j
  http://hogeinstein.blog93.fc2.com/blog-entry-109.html


POCO�Ɋւ��Ă�include�p�X�Alib�p�X�Ɋ܂܂�Ă���K�v������܂��B

