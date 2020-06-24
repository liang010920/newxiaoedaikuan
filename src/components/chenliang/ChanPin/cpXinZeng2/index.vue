<!-- 贷款产品管理，新增页面--产品参数配置 -->
<template>
	<el-container class="backColor">
		<el-main>
			<div>
				<el-row class="backColor2">
					<el-col :span="22">
						<div align="left">
							新增贷款产品
						</div>
					</el-col>
					<el-col :span="2">
						<div align="right" class="fan">
							<router-link to="/cp/ChanpinGuanLi" tag="span">
								<i class="el-icon-arrow-left"></i>返回
							</router-link>
						</div>
					</el-col>
				</el-row>
			</div>
			<div class="">
				<ul class="biaoti" align="center">
					<li>
						<span>1</span>
						<div>产品基本信息</div>
					</li>
					<li>
						<p></p>
					</li>
					<li>
						<span>2</span>
						<div>产品参数配置</div>
					</li>
					<li>
						<p></p>
					</li>
					<li>
						<span>3</span>
						<div>申请材料配置</div>
					</li>
				</ul>
				<el-row>
					<el-col :span="4">
						<div class="backColor3">
							<div class="jiben">产品参数设置</div>
							<div class="canshu">产品参数预览</div>
						</div>
					</el-col>
					<el-col :span="20">
						<div class="neirong3 backColor4">
							<el-row>
								<el-col :span="4">
									<div align="right">
										个人信息：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<div>
											<label><input type="checkbox" name="info" checked disabled>个人信息</label>
											<label><input type="checkbox" name="info" checked disabled>居住信息</label>
											<label><input type="checkbox" name="info" checked disabled>联系人信息</label>
										</div>
										<div>
											<label><input type="checkbox" name="info" checked disabled>职业信息</label>
											<label><input type="checkbox" name="info" checked disabled>身份认证信息</label>
											<label><input type="checkbox" name="info" checked disabled>银行资料</label>
										</div>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right">
										授权认证信息：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<label><input type="checkbox" name="shouquan" checked>手机运营商</label>
										<label><input type="checkbox" name="shouquan" checked>支付宝</label>
										<label><input type="checkbox" name="shouquan" checked>公积金</label>
										<label><input type="checkbox" name="shouquan" checked>手机运营商</label>
										<label><input type="checkbox" name="shouquan" checked>支付宝</label>
										<label><input type="checkbox" name="shouquan" checked>公积金</label>
									</div>
								</el-col>
							</el-row>
							<el-row>
								<el-col :span="4">
									<div align="right">
										补充资产信息：
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<label><input type="checkbox" name="zichan" checked>车辆信息</label>
										<label><input type="checkbox" name="zichan" checked>房产信息</label>
										<label><input type="checkbox" name="zichan" checked>其它房产信息</label>
										<label><input type="checkbox" name="zichan" checked>保险信息</label>
									</div>
								</el-col>
							</el-row>
						</div>
						<div style="margin: 0 3%;" align="left">
							<el-row>
								<el-col :span="24">
									<div class="backColor5">
										<div style="font-weight: bold;">补充参数说明：</div>
										<div>授权认证信息、补充资产信息可根据实际产品业务需要设置，设置后用户在申请该产品贷款时，可填写更完善的参数。</div>
									</div>
								</el-col>
							</el-row>
							<el-row style="background: #f2f2f2;padding:10px">
								<el-col :span="4">
									<div align="left">个人信息</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan16=!zhan16">收起 <i class="el-icon-arrow-up"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan16}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>身份证：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>性别：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<select name="" id="">
													<option value="请选择">请选择</option>
												</select>
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>学历：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<select name="" id="">
													<option value="请选择">请选择</option>
												</select>
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>婚姻状况：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<select name="" id="">
													<option value="请选择">请选择</option>
												</select>
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>邮箱：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">居住信息</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan=!zhan">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>婚姻状况：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<select name="" id="">
													<option value="请选择">请选择</option>
												</select>
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>邮箱：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">联系人</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan2=!zhan2">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan2}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>婚姻状况：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<select name="" id="">
													<option value="请选择">请选择</option>
												</select>
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>邮箱：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">职业信息</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan3=!zhan3">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan3}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">身份信息</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan4=!zhan4">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan4}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">银行资料</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan5=!zhan5">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan5}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">车辆信息</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan6=!zhan6">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan6}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">房产信息</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan7=!zhan7">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan7}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">其他房产信息</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan8=!zhan8">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan8}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">保险信息</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan9=!zhan9">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan9}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="5">
									<div align="left">手机运营商查询授权</div>
								</el-col>
								<el-col :span="19">
									<div align="right" @click="zhan10=!zhan10">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan10}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">支付宝查询授权</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan11=!zhan11">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan11}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">社保查询授权</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan12=!zhan12">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan12}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">公积金查询授权</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan13=!zhan13">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan13}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">网银流水查询授权</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan14=!zhan14">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan14}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row class="bj">
								<el-col :span="4">
									<div align="left">人脸识别认证</div>
								</el-col>
								<el-col :span="20">
									<div align="right" @click="zhan15=!zhan15">展开 <i class="el-icon-arrow-down"></i></div>
								</el-col>
							</el-row>
							<div class="border5" style="display: none;" :class="{xianshi:zhan15}">
								<el-row style="background: #F9FAFC;padding:10px">
									<el-col :span="4">
										<div align="center">参数名称</div>
									</el-col>
									<el-col :span="20">
										<div align="left">录入参数</div>
									</el-col>
								</el-row>
								<div class="neirong4">
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>产品名称：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>手机号码：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
									<el-row class="">
										<el-col :span="4">
											<div align="right" class="hanggao3">
												<span class="hong2">*</span>年龄：
											</div>
										</el-col>
										<el-col :span="20">
											<div align="left">
												<input type="text">
											</div>
										</el-col>
									</el-row>
								</div>
							</div>
							<el-row style="margin: 30px 0;">
								<el-col :span="4">
									<div align="right" style="padding: 1px;">
									</div>
								</el-col>
								<el-col :span="20">
									<div align="left">
										<router-link tag="span" to="/cp/cpxin">
											<span class="submit2">
												上一步，产品基本信息
											</span>
										</router-link>
										<router-link tag="span" to="/cp/cpxin3">
											<span class="submit2">
												下一步，申请材料管理
											</span>
										</router-link>
									</div>
								</el-col>
							</el-row>
						</div>
						<div align="center">Copyright © 2018 深圳市xxxx金融科技有限公司, All Rights Reserved.</div>
					</el-col>
				</el-row>
			</div>
		</el-main>
	</el-container>
</template>

<script>
	export default {
		name: 'cpxin2',
		data() {
			return {
				formLabelWidth: '120px',
				// 步骤条
				active: 0,
				fileList: [{
					name: 'food.jpeg',
					url: '../../../../../public/images/2.png'
				}, {
					name: 'food2.jpeg',
					url: '../../../../../public/images/2.png'
				}],
				zhan:false,
				zhan2:false,
				zhan3:false,
				zhan4:false,
				zhan5:false,
				zhan6:false,
				zhan7:false,
				zhan8:false,
				zhan9:false,
				zhan10:false,
				zhan11:false,
				zhan12:false,
				zhan13:false,
				zhan14:false,
				zhan15:false,
				zhan16:true,
			};
		},
		methods: {
			beforeRemove(file) {
				return this.$confirm(`确定移除 ${ file.name }？`);
			}
		}
	}
</script>

<style>
	.xianshi{
		display: block !important;
	}
	.bj {
		background: #f2f2f2;
		padding: 10px;
		margin-top: 1%;
	}

	.border5 {
		border: 1px solid #E5E5E5;
	}

	.border5>div {
		padding: 10px 0;
		border-bottom: 1px solid #E5E5E5;
	}

	.border5>div:last-child {
		border: 0 !important;
	}

	.border5>div:last-child>div:last-child {
		border: 0 !important;
	}

	.border5>div:first-child>div {
		padding: 0px 0 !important;
		border: 0 !important;
	}

	.border5>div>div {
		padding: 10px 0;
		border-bottom: 1px solid #E5E5E5;
	}

	.backColor5 {
		background: #fc9;
		margin-bottom: 3%;
		padding: 10px;
	}

	.backColor4 {
		margin: 3%;
		border: 1px solid #e4e4e4;
		background: #F9FAFC !important;
	}

	.biaoti {
		background: #F8F8F8;
		padding: 2%;
		font-size: 22px;
	}

	.biaoti>li>p {
		border-bottom: 2px solid #D4D4D4;
		padding: 0 70px;
		margin-top: -10px;
	}

	.biaoti>li:nth-of-type(2)>p {
		border-bottom: 2px solid #666;
	}

	.biaoti>li:nth-of-type(4)>p {
		border-bottom: 2px solid #666;
	}

	.biaoti>li {
		display: inline-block;
	}

	.biaoti>li>span {
		border: 2px solid #d4d4d4;
		padding: 5px 10px;
		background: #fff;
		border-radius: 50%;
		color: #d4d4d4;
	}

	.biaoti>li>div {
		color: #999;
		margin-top: 10px;
	}

	.biaoti>li:nth-of-type(1)>span {
		border: 2px solid #666;
		background: #666;
		color: #fff;
	}

	.biaoti>li:nth-of-type(1)>div {
		color: #666;
	}

	.biaoti>li:nth-of-type(3)>span {
		border: 2px solid #666;
		background: #666;
		color: #fff;
	}

	.biaoti>li:nth-of-type(3)>div {
		color: #666;
	}

	.jiben {
		padding: 10px 0;
		background: #9ea7b4;
		color: #fff;
		border-top-right-radius: 45px;
		/* border-bottom-right-radius: 45px; */
	}

	.canshu {
		margin-top: 100%;
		padding: 10px 0;
		background: #9ea7b4;
		color: #fff;
		border-top-right-radius: 45px;
		/* border-bottom-right-radius: 45px; */
	}

	.submit2 {
		width: 200px;
		height: 30px;
		color: white;
		background: black;
		border-radius: 10px;
		margin-right: 40px;
		text-align: center;
		padding: 10px;
	}

	.neirong3 label {
		margin-right: 10px;
	}

	.neirong3 {
		padding: 10px;
		background: #fff;
	}

	.neirong4 input[type=text] {
		padding: 1%;
	}

	.neirong4 select {
		padding: 1% 18% 1% 1%;
		color: #666;
	}

	.neirong4 .hanggao3 {
		line-height: 40px;
	}

	.neirong3 .jieshi {
		margin-bottom: 1% !important;
	}

	.neirong3>div {
		margin-bottom: 3%;
	}

	.hong2 {
		color: red;
	}

	.backColor3 {
		padding: 30px 0;
		position: relative;
	}

	.backColor {
		background: #F9F9F9;
		width: 100%;
	}

	.backColor2 {
		background: #fff;
		width: 100%;
		padding: 10px;
	}

	.fan {
		border: 1px solid #E4E4E4;
		padding: 2px 10px;
		text-align: center;
	}

	/* .adds {
		width: 1102px;
	} */

	/* .adds header {
		height: 70px;
		padding-top: 20px;
		background: #e4e4e4;
	} */

	/* .adds .el-step__main {
		white-space: normal;
		text-align: center;
	} */

	/* .cent {} */

	.fshi {
		width: 922px;
		margin-top: 20px;
	}

	.fshi input {
		/* width: 100px;
		height: 30px;
		border-radius: 5px 5px;
		margin-right: 10px; */
	}

	.xing {
		color: red;
	}
</style>
